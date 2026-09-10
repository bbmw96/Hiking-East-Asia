/** Central place to set the club's real contact address before launch. */
export const SAFETY_CONTACT_EMAIL = 'safety@bbmw0.com';

/**
 * The trips backend: Supabase project "hiking-east-asia" (ap-southeast-1).
 *
 * SUPABASE_ANON_KEY is not a secret. It identifies the project to Supabase's
 * API gateway; every request it makes is still subject to the Row Level
 * Security policies stored in the database, which is what actually decides
 * who can read or write which rows. Reading this key out of the page source
 * with the browser's inspector, which is possible for any Supabase site by
 * design, gives no more access than a signed-out visitor already has. The
 * one key that would matter, the service role key, exists only inside the
 * `admin-auth` edge function's own environment and is never sent to a
 * browser at all.
 */
export const SUPABASE_URL = 'https://sdcyiwsfihldacmoreny.supabase.co';
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkY3lpd3NmaWhsZGFjbW9yZW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwNDYwMjcsImV4cCI6MjEwNDYyMjAyN30.ZJnoaTYr01bQ0el3Y_FcbN_IgfuN5d8Vhqcl4GrcQQ4';
export const SUPABASE_FUNCTIONS_URL = 'https://sdcyiwsfihldacmoreny.supabase.co/functions/v1';
export const SUPABASE_PHOTO_BASE = 'https://sdcyiwsfihldacmoreny.supabase.co/storage/v1/object/public/trip-photos';

/** The twelve countries a trips admin account can be created for. */
export const ADMIN_COUNTRIES = [
  'malaysia', 'singapore', 'thailand', 'indonesia', 'vietnam', 'philippines',
  'brunei', 'japan', 'south-korea', 'taiwan', 'hong-kong', 'china',
] as const;
