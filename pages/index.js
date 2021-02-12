import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionServices from "../components/SectionServices";
import SectionSubcription from "../components/SectionSubscription";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const nav = ["Servicios", "Nosotros", "Contacto"];
  const sServices = {
    title: "Atencion a problemas On-Demand",
    text:
      "Con tu suscripción a nuestro servicio accedes a nuestro soporte de calidad para que puedas establecer un diagnóstico previo y una puesta en marcha a distancia.",
  };
  const sSubcription = {
    title: "Capacitaciones de maximo nivel",
    text:
      "Ofrecemos capacitaciones para personal mecanico para llevar el conocimiento del personal al proximo nivel",
  };

  return (
    <div>
      <Head>
        <title>FP Racing Data</title>
      </Head>
      <Navbar nav={nav} />
      <Hero />
      <SectionServices
        id={nav[0]}
        title={sServices.title}
        text={sServices.text}
      />
      <SectionSubcription
        id={nav[1]}
        title={sSubcription.title}
        text={sSubcription.text}
      />
      <Contact id={nav[2]} />
      <Footer nav={nav} />
    </div>
  );
}
