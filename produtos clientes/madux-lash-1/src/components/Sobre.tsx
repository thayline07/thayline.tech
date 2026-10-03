import { Rasgado, Brilhos } from "./Decor";
import Image from "next/image";
import { imagens, site, pagamentos, certificacoes } from "../data/content";
import { wa } from "../lib/whatsapp";
import Sparkle from "./Sparkle";
export default function Sobre() {
  return (<>
    <section className="sec"><div className="wrap duas reveal">
      {imagens.sobre ? <Image className="retrato-img" src={imagens.sobre.src} width={imagens.sobre.w} height={imagens.sobre.h} alt={imagens.sobre.alt} sizes="(max-width:800px) 100vw, 380px" />
        : <div className="foto retrato"><Sparkle size={30} /><span>sua foto aqui</span></div>}
      <div>
        <h2>Prazer, <span className="script">{site.profissional}</span></h2>
        <p className="lead">Sou formada internacionalmente em visagismo. Por isso eu não aplico o mesmo efeito em todo mundo: cada olhar é diferente e merece um cílio feito para ele.</p>
        <h3>Certificações</h3>
        <ul className="lista">{certificacoes.map((c) => <li key={c}><Sparkle size={12} /> {c}</li>)}</ul>
        <h3>Formas de pagamento</h3>
        <p className="chips">{pagamentos.map((p) => <span key={p}>{p}</span>)}</p>
      </div>
    </div></section>
    <section className="final"><Rasgado /><Brilhos />
      <h2>Bora escolher o <span className="script">seu efeito?</span></h2>
      <p><a className="btn claro" href={wa("Oi! Quero agendar um horário.")}>Chamar no WhatsApp</a></p>
      <Image src="/wordmark.png" width={300} height={175} alt={site.nome} />
      <p className="peq">{site.cidade} · @{site.instagram}</p>
    </section>
  </>);
}
