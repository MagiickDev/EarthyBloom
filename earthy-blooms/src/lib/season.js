// Fallback hero colors, used until a season has a photo.
export const SEASON_GROUNDS = {
  spring: '#4a6340',
  summer: '#6b5629',
  fall: '#6a3b22',
  winter: '#2e3f37',
};

// Meteorological seasons: Mar–May spring, Jun–Aug summer, Sep–Nov fall, Dec–Feb winter.
export function resolveSeason(setting, date = new Date()) {
  if (setting && setting !== 'auto') return setting;
  const m = date.getMonth();
  if (m === 11 || m < 2) return 'winter';
  if (m < 5) return 'spring';
  if (m < 8) return 'summer';
  return 'fall';
}
