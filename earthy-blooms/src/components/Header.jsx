import { useState } from 'react';
import { MenuIcon, CloseIcon } from './Icons.jsx';

const LINKS = [
  { href: '#shop', label: 'Shop' },
  { href: '#about', label: 'About' },
  { href: '#order', label: 'Custom orders' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <button
          className="icon-button header__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <a href="#main" className="header__logo">
          <img src="/brand/logo.png" alt="Earthy Blooms Florist" width="92" height="81" />
        </a>

        <nav id="site-nav" className={`header__nav${open ? ' is-open' : ''}`} aria-label="Main">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
