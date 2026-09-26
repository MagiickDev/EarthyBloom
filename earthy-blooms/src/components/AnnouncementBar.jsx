export default function AnnouncementBar({ text }) {
  if (!text) return null;
  return <div className="announcement">{text}</div>;
}
