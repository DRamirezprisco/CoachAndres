/**
 * Combina nombres de clases CSS filtrando valores falsy.
 */
export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(' ');
}
