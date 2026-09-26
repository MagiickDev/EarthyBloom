import { PhoneIcon, MailIcon, InstagramIcon } from './Icons.jsx';

export default function Footer({ contact }) {
  const tel = contact.phone.replace(/[^\d+]/g, '');

  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <img className="footer__logo" src="/brand/logo.png" alt="Earthy Blooms Florist" width="200" height="175" loading="lazy" />
        <div className="footer__contact">
          <h2 className="footer__heading">Get in touch</h2>
          <a href={`tel:${tel}`}><PhoneIcon />{contact.phone}</a>
          <a href={`mailto:${contact.email}`}><MailIcon />{contact.email}</a>
          {contact.instagramUrl ? (
            <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon />{contact.instagramName}</a>
          ) : (
            <span><InstagramIcon />{contact.instagramName}</span>
          )}
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Earthy Blooms Florist</span>
        <span>Arrangements by Kenzie Hayes</span>
      </div>
    </footer>
  );
}
