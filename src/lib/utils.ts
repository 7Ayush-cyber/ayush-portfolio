import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Treats unfilled placeholder fields ("add-link-here", "add-image-path-here") as empty. */
export function isPlaceholder(value?: string | null): boolean {
  if (!value) return true;
  return value.trim().toLowerCase().startsWith("add-");
}

export function hasLink(value?: string | null): value is string {
  return !isPlaceholder(value);
}
