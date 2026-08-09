import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-ivory hover:bg-accent hover:text-ink border border-ink hover:border-accent",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-ivory",
  ghost:
    "bg-transparent text-ink border border-transparent hover:border-line",
};

const base =
  "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap";

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
}: BaseProps & { href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  onClick,
  type = "button",
}: BaseProps & { onClick?: () => void; type?: "button" | "submit" }) {
  return (
    <button type={type} onClick={onClick} className={cn(base, styles[variant], className)}>
      {children}
    </button>
  );
}
