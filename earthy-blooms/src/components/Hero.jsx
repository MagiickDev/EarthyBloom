import { SEASON_GROUNDS } from '../lib/season.js';
import { imageUrl, srcSet } from '../lib/image.js';

export default function Hero({ seasonKey, season }) {
  if (!season) return null;
  const hasPhoto = Boolean(season.image);

  return (
    <section className={`hero${hasPhoto ? ' hero--photo' : ''}`} style={{ '--hero-ground': SEASON_GROUNDS[seasonKey] }}>
      {hasPhoto ? (
        <img
          className="hero__photo"
          src={imageUrl(season.image, 1600)}
          srcSet={srcSet(season.image, [800, 1600, 2400])}
          sizes="100vw"
          alt={season.imageAlt || ''}
          fetchPriority="high"
        />
      ) : (
        <>
          <img className="hero__sprig hero__sprig--left" src="/brand/sprig-left.png" alt="" />
          <img className="hero__sprig hero__sprig--right" src="/brand/sprig-right.png" alt="" />
        </>
      )}
      <div className="hero__content">
        <h1 className="hero__headline">{season.headline}</h1>
        {season.subheading && <p className="hero__sub">{season.subheading}</p>}
        <a className="button button--light" href="#shop">{season.buttonText || 'Shop now'}</a>
      </div>
    </section>
  );
}
