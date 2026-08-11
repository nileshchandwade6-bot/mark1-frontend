// Browser-side Supabase client. Safe to import in "use client" components.
// Uses the public anon key — data access is still protected by Row Level
// Security policies on the database, so this key alone cannot leak other
// users' data.
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
