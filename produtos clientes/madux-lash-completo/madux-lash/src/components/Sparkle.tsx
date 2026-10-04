export default function Sparkle({ size = 22 }: { size?: number }) {
  return (<svg className="sparkle" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 8 16 11 24 12 16 13 13 16 12 24 11 16 8 13 0 12 8 11 11 8 12 0Z" fill="currentColor" /></svg>);
}
