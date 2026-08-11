import { Card } from "@/components/ui/Card";
import type { DailyDashboard } from "@/types/database";

export function DailyDashboardSummary({ dashboard }: { dashboard: DailyDashboard | null }) {
  const priorities = Array.isArray(dashboard?.priorities) ? (dashboard!.priorities as string[]) : [];

  return (
    <Card title="Today's Plan">
      {!dashboard ? (
        <p className="text-sm text-slate-500">
          No dashboard generated for today yet. Say "Start my day" to MARK-1 to generate one.
        </p>
      ) : (
        <>
          {priorities.length > 0 && (
            <ul className="mb-3 space-y-1.5">
              {priorities.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-brass" aria-hidden>•</span>
                  {p}
                </li>
              ))}
            </ul>
          )}
          {dashboard.learning_goal && (
            <p className="text-sm text-slate-500">
              Learning goal: <span className="text-slate-700">{dashboard.learning_goal}</span>
            </p>
          )}
        </>
      )}
    </Card>
  );
}
