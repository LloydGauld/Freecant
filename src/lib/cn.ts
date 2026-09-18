type ClassValue = string | number | null | boolean | undefined;

/** Joins truthy class values with a space. No dedupe/merge — keep variant classes non-conflicting at the call site. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
