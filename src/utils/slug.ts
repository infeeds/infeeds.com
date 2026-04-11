const slugCache = new Map<string, string>();
const slugCounts = new Map<string, number>();

export const getCleanSlug = (id: string) => {
  if (slugCache.has(id)) {
    return slugCache.get(id);
  }

  const cleanId = id.replace(/\.(markdown|md|mdx)$/, '');
  const match = cleanId.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
  return match ? match[1] : cleanId;
};

export const getDateFromFilename = (id: string) => {
  const match = id.match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : null;
};