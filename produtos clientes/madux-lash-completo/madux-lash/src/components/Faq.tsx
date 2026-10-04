import { faq } from "../data/content";
export default function Faq() {
  return (
    <section className="sec"><div className="wrap faq">
      <h2>Dúvidas <span className="script">frequentes</span></h2>
      {faq.map((f) => (<details key={f.p}><summary>{f.p}</summary><p>{f.r}</p></details>))}
    </div></section>
  );
}
