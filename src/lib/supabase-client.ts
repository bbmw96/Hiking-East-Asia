import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../data/config.ts';

/**
 * Loaded on demand, from within the trips page's own client script, rather
 * than imported at module scope. That keeps the Supabase bundle out of every
 * page that is not the trips page, the same reason TrailMap dynamic-imports
 * Leaflet instead of importing it at the top of the file.
 */
export async function getSupabaseClient() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true },
  });
}
