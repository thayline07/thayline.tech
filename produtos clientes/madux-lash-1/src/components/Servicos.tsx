import { Pincelada } from "./Decor";
import { grupos, site } from "../data/content";
import { wa } from "../lib/whatsapp";
const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
export default function Servicos() {
  return (
    <section id="servicos" className="sec"><div className="wrap">
      <h2>Escolha o seu <span className="script">serviço</span></h2>
      <Pincelada />
      <p className="lead">Escolheu? É só tocar em agendar: a conversa abre no WhatsApp já com o serviço.</p>
      {grupos.map((g) => (
        <div key={g.titulo} className="grupo">
          <h3>{g.titulo}</h3>
          <div className="cards reveal">
            {g.itens.map((s) => (
              <article className="card" key={s.nome}>
                <h4>{s.nome}</h4>
                {s.opcoes && <p className="chips">{s.opcoes.map((o) => <span key={o}>{o}</span>)}</p>}
                <p className="preco">{s.preco ? brl(s.preco) : <small>Valor no WhatsApp</small>}</p>
                {s.manutencao && <p className="manut">Manutenção (20 dias): {brl(s.manutencao)}</p>}
                <a className="btn alt pequeno" href={wa(`Oi, ${site.profissional}! Quero agendar: ${s.nome}.`)}>Agendar</a>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div></section>
  );
}
