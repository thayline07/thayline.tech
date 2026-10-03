import Image from "next/image";
import { site, imagens } from "../data/content";
import { wa } from "../lib/whatsapp";
import Sparkle from "./Sparkle";
import { Brilhos } from "./Decor";
export default function Topo() {
  const t = imagens.topo;
  return (
    <div className="topo-fundo">
      <header className="wrap topo">
        <Image
          className="mix"
          src="/mascote.png"
          width={52}
          height={46}
          alt={site.nome}
          priority
        />
        <a
          className="btn pequeno"
          href={wa("Oi! Vim pelo site e quero agendar.")}
        >
          Agendar
        </a>
      </header>
      <section className="wrap hero top">
        <Brilhos />
        <div className="hero-txt">
          <p className="eyebrow">
            <Sparkle size={14} /> Cílios e sobrancelhas em {site.cidade}
          </p>
          <h1>
            Cílios pensados para o <span className="script">seu olhar</span>
          </h1>
          <p className="lead">
            Cada olho tem um formato. Com visagismo, eu escolho o efeito que
            mais combina com o seu.
          </p>
          <p className="acoes">
            <a className="btn" href="#estilos">
              Qual é o meu estilo?
            </a>{" "}
            <a className="btn alt" href="#servicos">
              Ver serviços
            </a>
          </p>
        </div>
        {t ? (
          <div className="hero-arte">
            <span className="est e1" aria-hidden="true">
              <Sparkle size={34} />
            </span>
            <span className="est e2" aria-hidden="true">
              <Sparkle size={22} />
            </span>
            <span className="est e3" aria-hidden="true">
              <Sparkle size={26} />
            </span>
            <Image
              className="eduarda"
              src={t.src}
              width={t.w}
              height={t.h}
              alt={t.alt}
              priority
              sizes="(max-width:800px) 140vw, 560px"
            />
          </div>
        ) : (
          <Image
            className="hero-img mix"
            src="/mascote.png"
            width={420}
            height={375}
            alt=""
            priority
          />
        )}
      </section>
    </div>
  );
}
