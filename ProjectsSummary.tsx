import { Card } from "@/components/ui/Card";
import type { Project } from "@/types/database";

export function ProjectsSummary({ projects }: { projects: Project[] }) {
  const active = projects.filter((p) => p.status === "active").length;

  return (
    <Card title="Projects" className="scroll-mt-20">
      <div id="projects" />
      <p className="font-mono text-2xl font-semibold text-slate-900">{active}</p>
      <p className="text-xs text-slate-500 mb-3">active project{active === 1 ? "" : "s"}</p>
      {projects.length === 0 ? (
        <p className="text-sm text-slate-500">No projects yet.</p>
      ) : (
        <ul className="space-y-1.5">
          {projects.slice(0, 4).map((p) => (
            <li key={p.id} className="flex items-center justify-between text-sm">
              <span className="truncate text-slate-700">{p.title}</span>
              <span className="text-xs text-slate-400 capitalize shrink-0 ml-2">{p.status}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
