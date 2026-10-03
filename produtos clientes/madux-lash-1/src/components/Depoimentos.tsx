import { Rasgado } from "./Decor";
import type { CSSProperties } from "react";
import { feedbacks } from "../data/content";
export default function Depoimentos() {
  const lista = feedbacks.length ? feedbacks : [1, 2, 3, 4].map((n) => ({ texto: "", autor: String(n) }));
  return (
    <section className="sec rosa"><Rasgado /><div className="wrap">
      <h2>Quem já <span className="script">passou por aqui</span></h2>
      <div className="fbs reveal">
        {lista.map((f, i) => (
          <blockquote key={i} className={"fb" + (f.texto ? "" : " vazio")} style={{ "--r": `${[-2, 1.5, -1, 2][i % 4]}deg` } as CSSProperties}>
            {f.texto ? <>“{f.texto}”{f.autor && <cite>{f.autor}</cite>}</> : "print do feedback aqui"}
          </blockquote>
        ))}
      </div>
    </div></section>
  );
}
