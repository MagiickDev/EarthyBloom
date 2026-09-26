// Serves CMS uploads through Netlify Image CDN so full-size phone photos
// are resized and converted automatically. Local dev uses the original file.
const useCdn = !import.meta.env.DEV;

export function imageUrl(src, width) {
  if (!src) return '';
  if (!useCdn || /^https?:\/\//.test(src)) return src;
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}

export function srcSet(src, widths) {
  if (!src || !useCdn) return undefined;
  return widths.map((w) => `${imageUrl(src, w)} ${w}w`).join(', ');
}

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
