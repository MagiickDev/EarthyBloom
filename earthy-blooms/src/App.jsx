import { useState } from 'react';
import { site, about, policy, seasons, products } from './lib/content.js';
import { resolveSeason } from './lib/season.js';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import About from './components/About.jsx';
import Policy from './components/Policy.jsx';
import OrderForm from './components/OrderForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const seasonKey = resolveSeason(site.currentSeason);
  const [orderProduct, setOrderProduct] = useState('');

  const startOrder = (name) => {
    setOrderProduct(name);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('order')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <AnnouncementBar text={site.announcement} />
      <Header />
      <main id="main">
        <Hero seasonKey={seasonKey} season={seasons[seasonKey]} />
        <ProductGrid products={products} onOrder={startOrder} />
        <About about={about} />
        <Policy policy={policy} />
        <OrderForm product={orderProduct} onProductChange={setOrderProduct} />
      </main>
      <Footer contact={site.contact} />
    </>
  );
}
