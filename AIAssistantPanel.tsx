import { Card } from "@/components/ui/Card";

// Placeholder for v1 — wired up once /api/ai/chat exists.
// Kept visually consistent with the rest of the deck so it doesn't
// look like an afterthought once it's live.
export function AIAssistantPanel() {
  return (
    <Card
      className="bg-ink border-none"
      title=""
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-brass-light uppercase mb-1">
            AI Assistant
          </p>
          <h3 className="font-display text-base font-semibold text-paper">
            Ask MARK-1 anything
          </h3>
          <p className="mt-1 text-sm text-slate-400 max-w-xs">
            Paste a task, a client message, or a screenshot and MARK-1 will break it down for you.
          </p>
        </div>
        <span className="text-2xl text-signal-light shrink-0" aria-hidden>◆</span>
      </div>
      <button
        disabled
        className="mt-4 w-full rounded-lg border border-ink-light bg-ink-light/50 py-2.5 text-sm font-medium text-slate-400 cursor-not-allowed"
        title="Coming in the next build"
      >
        Chat — coming soon
      </button>
    </Card>
  );
}
