import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: "◆" },
  { href: "/dashboard#tasks", label: "Tasks", icon: "▤" },
  { href: "/dashboard#projects", label: "Projects", icon: "▣" },
  { href: "/dashboard#clients", label: "Clients", icon: "◐" },
  { href: "/dashboard#earnings", label: "Earnings", icon: "◈" },
];

// Desktop/tablet sidebar — hidden below md, MobileNav takes over on phones.
export function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col md:w-60 md:shrink-0 bg-ink min-h-screen px-4 py-6">
      <div className="mb-8 px-2">
        <p className="font-mono text-[10px] tracking-[0.2em] text-brass-light uppercase">
          Vyroniq AI
        </p>
        <p className="font-display text-xl font-semibold text-paper">MARK-1</p>
      </div>
      <nav className="flex flex-col gap-1">
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-ink-light hover:text-paper transition"
          >
            <span aria-hidden className="text-brass-light">{l.icon}</span>
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
