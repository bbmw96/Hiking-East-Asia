-- Applied to project sdcyiwsfihldacmoreny (hiking-east-asia) on 2026-09-10.
-- See supabase/README.md for why app_metadata, not user_metadata, carries
-- the authorization claims these policies check.

create extension if not exists pgcrypto;

create table public.trips (
  id uuid primary key default gen_random_uuid(),
  country text not null,
  area_slug text,
  locality text,
  region_label text,
  trip_date date not null,
  title jsonb not null,
  summary jsonb not null,
  participant_count int,
  photos jsonb not null default '[]'::jsonb,
  published boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index trips_country_idx on public.trips (country);
create index trips_date_idx on public.trips (trip_date desc);

alter table public.trips enable row level security;

create policy "public reads published trips"
  on public.trips for select
  to anon, authenticated
  using (published = true);

create policy "country admin reads own country trips"
  on public.trips for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'country') = country);

create policy "country admin inserts own country trips"
  on public.trips for insert
  to authenticated
  with check ((auth.jwt() -> 'app_metadata' ->> 'country') = country);

create policy "country admin updates own country trips"
  on public.trips for update
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'country') = country)
  with check ((auth.jwt() -> 'app_metadata' ->> 'country') = country);

create policy "country admin deletes own country trips"
  on public.trips for delete
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'country') = country);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trips_set_updated_at
before update on public.trips
for each row execute function public.set_updated_at();

insert into storage.buckets (id, name, public)
values ('trip-photos', 'trip-photos', true)
on conflict (id) do nothing;

create policy "public views trip photos"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'trip-photos');

create policy "country admin uploads own country photos"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'trip-photos'
    and (auth.jwt() -> 'app_metadata' ->> 'country') = (storage.foldername(name))[1]
  );

create policy "country admin updates own country photos"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'trip-photos'
    and (auth.jwt() -> 'app_metadata' ->> 'country') = (storage.foldername(name))[1]
  );

create policy "country admin deletes own country photos"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'trip-photos'
    and (auth.jwt() -> 'app_metadata' ->> 'country') = (storage.foldername(name))[1]
  );
