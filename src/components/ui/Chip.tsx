import { cn } from "@/lib/utils";

export function Chip({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "accent" | "slate";
  className?: string;
}) {
  const tones = {
    default: "border-line text-muted bg-surface",
    accent: "border-accent/40 text-ink bg-accent-soft",
    slate: "border-slate/25 text-slate bg-slate/5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
