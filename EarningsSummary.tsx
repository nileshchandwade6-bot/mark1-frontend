import { Card } from "@/components/ui/Card";
import type { EarningsLogEntry } from "@/types/database";

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function EarningsSummary({ entries }: { entries: EarningsLogEntry[] }) {
  const now = new Date();
  const thisMonth = entries.filter((e) => {
    const d = new Date(e.earned_date);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  });
  const monthTotal = thisMonth.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <Card title="Earnings" className="scroll-mt-20">
      <div id="earnings" />
      <p className="font-mono text-2xl font-semibold text-positive">{formatINR(monthTotal)}</p>
      <p className="text-xs text-slate-500 mb-3">this month</p>
      {entries.length === 0 ? (
        <p className="text-sm text-slate-500">No earnings logged yet.</p>
      ) : (
        <ul className="space-y-1.5">
          {entries.slice(0, 4).map((e) => (
            <li key={e.id} className="flex items-center justify-between text-sm">
              <span className="text-slate-700 capitalize">{e.source.replace("_", " ")}</span>
              <span className="font-mono text-slate-900 shrink-0 ml-2">{formatINR(Number(e.amount))}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
