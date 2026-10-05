import { paginate } from "./paginate.js";

/** Returns every window of `size` consecutive items, stepping by one. */
export function windows(items, size) {
  const out = [];
  for (let i = 0; i <= items.length - size + 1; i++) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

/** The page that contains `index`, or null when the index is out of range. */
export function pageOf(items, index, size) {
  const page = Math.floor(index / size) + 1;
  const found = paginate(items, page, size);
  return found.length === 0 ? null : { page, items: found };
}

/** Label for a page header, e.g. "Page 2 of 5". */
export function pageLabel(items, index, size) {
  const located = pageOf(items, index, size);
  return `Page ${located.page} of ${Math.ceil(items.length / size)}`;
}
