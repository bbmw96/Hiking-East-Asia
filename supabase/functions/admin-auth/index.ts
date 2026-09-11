import { createClient } from "jsr:@supabase/supabase-js@2";

/**
 * The one-time /bootstrap branch that created the twelve country-admin
 * accounts has been removed from this file after that single run. Nothing
 * left in this function can create or list accounts; it can only rotate the
 * password of whichever account is already holding a valid session token,
 * which is what lets an admin clear their own must_change_password flag
 * without the service role key ever reaching a browser.
 */

function corsHeaders(origin: string | null) {
  return {
    "Access-Control-Allow-Origin": origin ?? "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const headers = { ...corsHeaders(origin), "content-type": "application/json" };

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers });
  }

  const url = new URL(req.url);
  const action = url.pathname.split("/").pop();

  if (action !== "complete-password-setup") {
    return new Response(JSON.stringify({ error: "not found" }), { status: 404, headers });
  }

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const authHeader = req.headers.get("authorization") ?? "";
  const token = authHeader.replace(/^Bearer /, "");
  if (!token) {
    return new Response(JSON.stringify({ error: "missing session" }), { status: 401, headers });
  }

  const { data: userData, error: userErr } = await admin.auth.getUser(token);
  if (userErr || !userData.user) {
    return new Response(JSON.stringify({ error: "invalid session" }), { status: 401, headers });
  }

  let body: { newPassword?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "bad request" }), { status: 400, headers });
  }

  const newPassword = typeof body.newPassword === "string" ? body.newPassword : "";
  if (newPassword.length < 12) {
    return new Response(
      JSON.stringify({ error: "Password must be at least 12 characters." }),
      { status: 400, headers },
    );
  }

  const meta = userData.user.app_metadata ?? {};
  const { error: updateErr } = await admin.auth.admin.updateUserById(userData.user.id, {
    password: newPassword,
    app_metadata: { ...meta, must_change_password: false },
  });
  if (updateErr) {
    return new Response(JSON.stringify({ error: updateErr.message }), { status: 500, headers });
  }

  return new Response(JSON.stringify({ ok: true }), { headers });
});
