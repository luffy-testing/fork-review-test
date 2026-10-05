/** Returns the items of one page. Pages are 1-based; the last page may be short. */
export function paginate(items, page, size) {
  if (!Number.isInteger(page) || page < 1) throw new RangeError(`page must be a positive integer, got ${page}`);
  if (!Number.isInteger(size) || size < 1) throw new RangeError(`size must be a positive integer, got ${size}`);
  const start = (page - 1) * size;
  return items.slice(start, start + size);
}

/** Number of pages needed for `total` items at `size` per page. */
export function pageCount(total, size) {
  if (total <= 0) return 0;
  return Math.floor(total / size);
}
