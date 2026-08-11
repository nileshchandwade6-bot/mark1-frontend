import { Card } from "@/components/ui/Card";
import { LogoutButton } from "@/components/dashboard/LogoutButton";
import type { Profile } from "@/types/database";

export function ProfileSection({ profile, email }: { profile: Profile | null; email: string | undefined }) {
  return (
    <Card title="Profile" className="scroll-mt-20" >
      <div id="profile" />
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-slate-500">Name</dt>
          <dd className="font-medium text-slate-900">{profile?.full_name ?? "—"}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">Email</dt>
          <dd className="font-medium text-slate-900">{email ?? "—"}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">Stage</dt>
          <dd className="font-medium text-slate-900 capitalize">
            {profile?.onboarding_stage ?? "—"}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">Language</dt>
          <dd className="font-medium text-slate-900">
            {profile?.language_pref === "en" ? "English" : "हिंदी"}
          </dd>
        </div>
      </dl>
      <div className="mt-4 pt-4 border-t border-slate-200">
        <LogoutButton />
      </div>
    </Card>
  );
}
