import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

// Server component: reads today's date + a lightweight greeting.
// Productivity ring is a static placeholder until eod_reports has data.
export async function DashboardHeader({ fullName }: { fullName: string | null }) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="flex items-center justify-between gap-4 mb-6">
      <div>
        <p className="text-xs text-slate-400">{today}</p>
        <h1 className="font-display text-xl sm:text-2xl font-semibold text-slate-900">
          Namaste{fullName ? `, ${fullName.split(" ")[0]}` : ""} 👋
        </h1>
      </div>
      <Link
        href="/dashboard#profile"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper font-display text-sm shrink-0"
        aria-label="Profile"
      >
        {(fullName ?? "U").charAt(0).toUpperCase()}
      </Link>
    </header>
  );
}
