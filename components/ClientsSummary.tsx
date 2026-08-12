import { Card } from "@/components/ui/Card";
import type { Client } from "@/types/database";

export function ClientsSummary({ clients }: { clients: Client[] }) {
  const inPipeline = clients.filter((c) => c.status !== "archived").length;

  return (
    <Card title="Clients" className="scroll-mt-20">
      <div id="clients" />
      <p className="font-mono text-2xl font-semibold text-slate-900">{inPipeline}</p>
      <p className="text-xs text-slate-500 mb-3">in pipeline</p>
      {clients.length === 0 ? (
        <p className="text-sm text-slate-500">No clients yet.</p>
      ) : (
        <ul className="space-y-1.5">
          {clients.slice(0, 4).map((c) => (
            <li key={c.id} className="flex items-center justify-between text-sm">
              <span className="truncate text-slate-700">{c.name}</span>
              <span className="text-xs text-slate-400 capitalize shrink-0 ml-2">
                {c.status.replace("_", " ")}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
