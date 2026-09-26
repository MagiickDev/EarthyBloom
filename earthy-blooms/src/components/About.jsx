import { imageUrl, srcSet } from '../lib/image.js';

export default function About({ about }) {
  const paragraphs = (about.body || '').split(/\n\s*\n/).filter(Boolean);

  return (
    <section id="about" className="about">
      <img className="about__sprig" src="/brand/sprig-right.png" alt="" />
      <div className="about__inner">
        <div className="about__photo">
          {about.photo ? (
            <img
              src={imageUrl(about.photo, 900)}
              srcSet={srcSet(about.photo, [500, 900, 1300])}
              sizes="(max-width: 900px) 100vw, 40vw"
              alt={about.photoAlt || ''}
              loading="lazy"
            />
          ) : (
            <span>Photo coming soon</span>
          )}
        </div>
        <div className="about__text">
          <h2 className="section__title">{about.heading}</h2>
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <a className="button button--outline-light" href="#order">Request a custom order</a>
        </div>
      </div>
    </section>
  );
}
