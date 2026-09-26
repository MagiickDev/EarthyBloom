import { useState } from 'react';

// Posts to Netlify Forms. Field names must match the hidden form in index.html.
const encode = (data) => new URLSearchParams(data).toString();

export default function OrderForm({ product, onProductChange }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'custom-order', ...data }),
      });
      if (!res.ok) throw new Error(res.statusText);
      setStatus('sent');
      e.target.reset();
      onProductChange('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="order" className="section order">
      <div className="order__intro">
        <h2 className="section__title">Request an order</h2>
        <p>Tell Kenzie what you have in mind and when you need it. She'll reply to confirm details and payment.</p>
      </div>

      {status === 'sent' ? (
        <p className="order__done" role="status">Request sent. Kenzie will get back to you soon.</p>
      ) : (
        <form className="order__form" name="custom-order" onSubmit={handleSubmit}>
          <p hidden><label>Leave this empty <input name="bot-field" /></label></p>

          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
          <label className="span-2">Email<input name="email" type="email" autoComplete="email" /></label>
          <label className="span-2">
            Arrangement
            <input name="product" value={product} onChange={(e) => onProductChange(e.target.value)} placeholder="Custom, or a name from the shop" />
          </label>
          <label>Occasion<input name="occasion" /></label>
          <label>Date needed<input name="date" type="date" /></label>
          <label className="span-2">Budget<input name="budget" placeholder="e.g. $75" /></label>
          <label className="span-2">Notes<textarea name="notes" rows="4" placeholder="Colors, flowers you love, delivery address" /></label>

          {status === 'error' && (
            <p className="order__error span-2" role="alert">
              The request didn't go through. Check your connection and try again, or call (513) 227-8483.
            </p>
          )}
          <button className="button button--solid span-2" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending request…' : 'Send request'}
          </button>
        </form>
      )}
    </section>
  );
}
