# Earthy Blooms Florist

Vite + React site with Decap CMS (via DecapBridge) so Kenzie can edit everything at `/admin`. Hosted on Netlify.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

1. Push to GitHub and create the Netlify site from the repo (build settings come from `netlify.toml`).
2. In **Netlify → Forms**, enable form detection. Order requests arrive under the `custom-order` form. Add an email notification to Kenzie's address.
3. In DecapBridge, add the site and invite Kenzie. Paste the backend block it gives you into `public/admin/config.yml`, and set `repo`, `site_url` and `display_url`.

## Where content lives

| What | File(s) | CMS section |
|---|---|---|
| Products | `content/products/*.json` (one file each) | Products |
| Seasonal hero | `content/seasons/{spring,summer,fall,winter}.json` | Seasons |
| Current season, announcement bar, contact info | `content/site.json` | Site settings → General |
| About section | `content/about.json` | Site settings → About |

Uploads go to `public/uploads/`. In production they're served through Netlify Image CDN (`src/lib/image.js`), so full-size phone photos are fine.

## Behavior notes

- **Season:** `currentSeason: "auto"` picks by month (Mar–May spring, Jun–Aug summer, Sep–Nov fall, Dec–Feb winter). Any other value pins it. It's resolved in the browser, so auto mode switches on its own without a rebuild.
- **No hero photo yet:** the hero shows a seasonal color with the brand leaf art.
- **Buy link:** if a product has one (a Stripe/Square payment link), its button says **Buy now**. If not, it says **Order**, which pre-fills the request form.
- **Hidden products:** products with `available: false` are hidden. A price of `0` hides the price line.
- **Form fields:** if you change the order form fields, update the hidden form in `index.html` to match. Netlify detects forms from that static copy.
