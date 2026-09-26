const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...base}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" /></svg>
);
export const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base}><rect x="3" y="5" width="18" height="14" /><path d="M3 6l9 7 9-7" /></svg>
);
export const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" /></svg>
);
export const StemIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" {...base} strokeWidth={1.3}>
    <path d="M24 44V22" /><path d="M24 22c-6-1-9-6-8-12 5 0 8 3 8 8" /><path d="M24 22c6-1 9-6 8-12-5 0-8 3-8 8" /><path d="M24 34c-5 0-9-3-10-8 5 0 9 3 10 8z" />
  </svg>
);
