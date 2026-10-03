import Topo from "../components/Topo";
import Estilos from "../components/Estilos";
import Servicos from "../components/Servicos";
import Depoimentos from "../components/Depoimentos";
import Faq from "../components/Faq";
import Sobre from "../components/Sobre";
import RevealObserver from "../components/RevealObserver";
import { wa } from "../lib/whatsapp";
import { site, grupos, faq } from "../data/content";
const [loc, uf] = site.cidade.split("/");
// Dados estruturados (Google). Sem preços e sem telefone até a cliente confirmar.
const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BeautySalon",
      name: site.nome,
      url: site.url,
      image: `${site.url}/wordmark.png`,
      sameAs: [`https://instagram.com/${site.instagram}`],
      address: {
        "@type": "PostalAddress",
        addressLocality: loc,
        addressRegion: uf,
        addressCountry: "BR",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços",
        itemListElement: grupos
          .flatMap((g) => g.itens)
          .map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.nome },
          })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.p,
        acceptedAnswer: { "@type": "Answer", text: f.r },
      })),
    },
  ],
};
export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <Topo />
      <Estilos />
      <Servicos />
      <Depoimentos />
      <Faq />
      <Sobre />
      <RevealObserver />
      <a className="fixo btn" href={wa("Oi! Vim pelo site e quero agendar.")}>
        Agendar pelo WhatsApp
      </a>
    </main>
  );
}
