"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Rasgado } from "./Decor";
import { estilos, imagens } from "../data/content";
import Sparkle from "./Sparkle";

type Img = { src: string; w: number; h: number; alt: string };

export default function Estilos() {
  const [ativo, setAtivo] = useState(0);
  const trilho = useRef<HTMLDivElement>(null);
  const pausa = useRef(0); // evita brigar com a rolagem automática

  function ir(i: number) {
    setAtivo(i);
    pausa.current = Date.now() + 700;
    const reduzir = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    (trilho.current?.children[i] as HTMLElement | undefined)?.scrollIntoView({
      behavior: reduzir ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function aoRolar() {
    const t = trilho.current;
    if (!t || Date.now() < pausa.current) return;
    const centro = t.scrollLeft + t.clientWidth / 2;
    let melhor = 0;
    let menor = Infinity;
    Array.from(t.children).forEach((el, i) => {
      const h = el as HTMLElement;
      const d = Math.abs(h.offsetLeft + h.offsetWidth / 2 - centro);
      if (d < menor) {
        menor = d;
        melhor = i;
      }
    });
    setAtivo(melhor);
  }

  return (
    <section id="estilos" className="sec rosa">
      <Rasgado />
      <div className="wrap">
        <h2>
          Boneca, esquilo ou <span className="script">gatinho?</span>
        </h2>
        <p className="lead">
          Qual é o melhor para você? Com o visagismo, eu analiso o seu olhar e
          descubro qual combina mais, os cílios podem ser personalizados para
          cada olhar.
        </p>

        <div className="estilos reveal">
          <p className="dica" aria-hidden="true">
            <span className="seta volta">‹</span> deslize ou toque para ver os
            outros <span className="seta">›</span>
          </p>

          <div className="trilho" ref={trilho} onScroll={aoRolar}>
            {estilos.map((e, i) => {
              const imagem = (
                imagens as unknown as Record<string, Img | undefined>
              )[e.toLowerCase()];
              return (
                <figure
                  key={e}
                  className={"slide" + (i === ativo ? " ativo" : "")}
                  onClick={() => ir(i)}
                >
                  <div className="moldura">
                    <Sparkle size={30} />
                    {imagem ? (
                      <Image
                        src={imagem.src}
                        width={imagem.w}
                        height={imagem.h}
                        alt={imagem.alt}
                        sizes="(max-width:800px) 78vw, 440px"
                      />
                    ) : (
                      <div className="foto">
                        <span>foto aqui</span>
                      </div>
                    )}
                  </div>
                  <figcaption>{e}</figcaption>
                </figure>
              );
            })}
          </div>

          <div className="abas" role="group" aria-label="Escolher estilo">
            {estilos.map((e, i) => (
              <button
                key={e}
                type="button"
                className="aba"
                aria-pressed={i === ativo}
                onClick={() => ir(i)}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
