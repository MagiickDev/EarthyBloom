import { imageUrl, srcSet, formatPrice } from '../lib/image.js';
import { StemIcon } from './Icons.jsx';

function ProductCard({ product, onOrder }) {
  const { name, price, photo, photoAlt, buyLink } = product;

  return (
    <article className="product">
      <div className="product__photo">
        {photo ? (
          <img
            src={imageUrl(photo, 600)}
            srcSet={srcSet(photo, [400, 600, 900])}
            sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
            alt={photoAlt || name}
            loading="lazy"
          />
        ) : (
          <div className="product__placeholder"><StemIcon /><span>Photo coming soon</span></div>
        )}
      </div>
      <h3 className="product__name">{name}</h3>
      {price > 0 && <p className="product__price">{formatPrice(price)}</p>}
      {buyLink ? (
        <a className="product__action" href={buyLink} target="_blank" rel="noopener noreferrer">
          Buy now<span className="visually-hidden">: {name} (opens payment page)</span>
        </a>
      ) : (
        <button className="product__action" type="button" onClick={() => onOrder(name)}>
          Order<span className="visually-hidden">: {name}</span>
        </button>
      )}
    </article>
  );
}

export default function ProductGrid({ products, onOrder }) {
  return (
    <section id="shop" className="section shop">
      <h2 className="section__title">Shop the season</h2>
      {products.length ? (
        <div className="shop__grid">
          {products.map((p) => <ProductCard key={p.id} product={p} onOrder={onOrder} />)}
        </div>
      ) : (
        <p>New arrangements are on the way. Call or text to place a custom order.</p>
      )}
    </section>
  );
}
