import Sparkle from "./Sparkle";
const P = [["8%", "14%", 26, 0], ["90%", "18%", 18, 1.2], ["80%", "80%", 30, 0.6], ["12%", "74%", 16, 1.8]] as const;
export function Brilhos() {
  return (<div className="brilhos" aria-hidden="true">{P.map(([l, t, s, d], i) => <span key={i} style={{ left: l, top: t, animationDelay: `${d}s` }}><Sparkle size={s} /></span>)}</div>);
}
export function Rasgado() {
  return (<svg className="rasgado" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40V14l40 6 50-10 60 12 70-14 80 12 60-8 90 12 70-12 80 10 60-12 90 14 70-10 80 12 70-14 60 12 70-8 90 10V40Z" fill="#fff" /></svg>);
}
export function Pincelada() {
  return (<svg className="pincelada" viewBox="0 0 200 12" aria-hidden="true"><path d="M2 8C40 2 80 10 120 5s60 2 78-1" fill="none" stroke="#D0AC68" strokeWidth="4" strokeLinecap="round" /></svg>);
}
