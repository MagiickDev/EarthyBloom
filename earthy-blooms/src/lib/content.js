// All site content lives in /content as JSON, edited through Decap CMS at /admin.
// Vite bundles it at build time, so every CMS save triggers a Netlify rebuild.
import site from '../../content/site.json';
import about from '../../content/about.json';

const fileName = (path) => path.split('/').pop().replace(/\.json$/, '');

const seasonFiles = import.meta.glob('../../content/seasons/*.json', { eager: true, import: 'default' });
const productFiles = import.meta.glob('../../content/products/*.json', { eager: true, import: 'default' });

export const seasons = Object.fromEntries(
  Object.entries(seasonFiles).map(([path, data]) => [fileName(path), data]),
);

export const products = Object.entries(productFiles)
  .map(([path, data]) => ({ id: fileName(path), ...data }))
  .filter((p) => p.available !== false)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.name.localeCompare(b.name));

export { site, about };
