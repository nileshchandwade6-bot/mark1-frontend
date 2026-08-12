import { Card } from "@/components/ui/Card";
import type { Task } from "@/types/database";

const statusStyle: Record<Task["status"], string> = {
  pending: "bg-slate-200 text-slate-600",
  in_progress: "bg-signal/15 text-signal",
  completed: "bg-positive/15 text-positive",
  rejected: "bg-danger/15 text-danger",
};

export function TodaysTasks({ tasks }: { tasks: Task[] }) {
  return (
    <Card title="Today's Tasks" className="scroll-mt-20">
      <div id="tasks" />
      {tasks.length === 0 ? (
        <p className="text-sm text-slate-500">
          No tasks logged yet. Paste or add today's task to get started.
        </p>
      ) : (
        <ul className="divide-y divide-slate-100">
          {tasks.map((t) => (
            <li key={t.id} className="flex items-center justify-between gap-3 py-2.5">
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{t.title}</p>
                {t.deadline && (
                  <p className="text-xs text-slate-500">
                    Due {new Date(t.deadline).toLocaleDateString("en-IN")}
                  </p>
                )}
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ${statusStyle[t.status]}`}
              >
                {t.status.replace("_", " ")}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
