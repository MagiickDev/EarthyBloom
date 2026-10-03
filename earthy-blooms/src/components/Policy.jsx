export default function Policy({ policy }) {
  const paragraphs = (policy?.body || '').split(/\n\s*\n/).filter(Boolean);
  if (!paragraphs.length) return null;

  return (
    <section className="policy" aria-labelledby="policy-heading">
      <div className="policy__panel">
        <h2 id="policy-heading" className="policy__heading">{policy.heading}</h2>
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}
