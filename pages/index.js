import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Us from "../components/Us";
import SectionServices from "../components/SectionServices";
import SectionSubcription from "../components/SectionSubscription";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const nav = ["Nosotros", "Servicios", "Capacitaciones", "Contacto"];
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

  const sUs = {
    firstText:
      "Somos un equipo dedicado a la asistencia Técnica Integral de Talleres Mecánicos Automotrices. Esta asistencia consiste en aportar a los mencionados la información necesaria para desenvolverse sin ningún inconveniente en la reparación del rodado.",
    secondText:
      "Desde hace 27 años nos dedicamos especialmente al mantenimiento vehicular. Contamos con un staff altamente capacitado con una gran experiencia en el rubro tanto mecánico como en la atención al cliente.",
  };

  return (
    <div>
      <Head>
        <title>FP Racing Data</title>
      </Head>
      <Navbar nav={nav} />
      <Hero />
      <Us id={nav[0]} firstText={sUs.firstText} secondText={sUs.secondText} />
      <SectionServices
        id={nav[1]}
        title={sServices.title}
        text={sServices.text}
      />
      <SectionSubcription
        id={nav[2]}
        title={sSubcription.title}
        text={sSubcription.text}
      />
      <Contact id={nav[3]} />
      <Footer nav={nav} />
    </div>
  );
}
