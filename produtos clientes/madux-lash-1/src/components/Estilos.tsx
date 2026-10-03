import { Rasgado } from "./Decor";
import { estilos } from "../data/content";
import Sparkle from "./Sparkle";
export default function Estilos() {
  return (
    <section id="estilos" className="sec rosa"><Rasgado /><div className="wrap">
      <h2>Boneca, esquilo ou <span className="script">gatinho?</span></h2>
      <p className="lead">Qual é o melhor para você? Com o visagismo, eu analiso o seu olhar e descubro qual combina mais — os cílios podem ser personalizados para cada olhar.</p>
      <div className="polas reveal">
        {estilos.map((e) => (
          <figure className="pola" key={e}>
            {/* Troque o bloco abaixo por <Image src="/estilos/boneca.jpg" ... /> quando as fotos chegarem */}
            <div className="foto"><Sparkle size={30} /><span>foto aqui</span></div>
            <figcaption>{e}</figcaption>
          </figure>
        ))}
      </div>
    </div></section>
  );
}
