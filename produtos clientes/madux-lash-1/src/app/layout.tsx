import type { Metadata } from "next";
import "@fontsource/anton";
import "@fontsource/sacramento";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "../data/content";
const title = `${site.nome} · Cílios e sobrancelhas em ${site.cidade}`;
const description = "Extensão de cílios, lash lift, brow lamination e design de sobrancelha com visagismo. Escolha o serviço e agende pelo WhatsApp.";
export const metadata: Metadata = {
  metadataBase: new URL(site.url), title, description, alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", siteName: site.nome, title, description, images: ["/wordmark.png"] },
  twitter: { card: "summary_large_image", title, description }, robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR"><body>{children}</body></html>);
}
