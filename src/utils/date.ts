// Date helpers that tolerate undefined / null / string / number / Date.
// Used across the homepage + archive pages so the same value can come
// from frontmatter (Date | string), from the schema's optional `date`,
// or be missing entirely (the loader fills it from file mtime as a
// last resort).
export const toTime = (value: unknown): number => {
  if (value == null) return 0;
  if (value instanceof Date) {
    return Number.isFinite(value.getTime()) ? value.getTime() : 0;
  }
  if (typeof value === 'number' || typeof value === 'string') {
    const t = new Date(value).getTime();
    return Number.isFinite(t) ? t : 0;
  }
  return 0;
};

export const formatDate = (value: unknown, opts: Intl.DateTimeFormatOptions): string => {
  const t = toTime(value);
  return t ? new Date(t).toLocaleDateString('en-US', opts) : '';
};
