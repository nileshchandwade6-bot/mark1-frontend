import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Home", icon: "◆" },
  { href: "/dashboard#tasks", label: "Tasks", icon: "▤" },
  { href: "/dashboard#projects", label: "Projects", icon: "▣" },
  { href: "/dashboard#clients", label: "Clients", icon: "◐" },
  { href: "/dashboard#earnings", label: "Money", icon: "◈" },
];

// Bottom tab bar — the primary navigation on phones (thumb-reachable).
export function MobileNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-20 bg-ink border-t border-ink-light"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="flex justify-between px-2 py-2">
        {links.map((l) => (
          <li key={l.label} className="flex-1">
            <Link
              href={l.href}
              className="flex flex-col items-center gap-0.5 py-1 text-[11px] text-slate-300 active:text-brass-light"
            >
              <span aria-hidden className="text-base">{l.icon}</span>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
