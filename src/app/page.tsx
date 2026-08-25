import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Sobre from "@/sections/Sobre";
import Atuacao from "@/sections/Atuacao";
import Conteudos from "@/sections/Conteudos";
import Contato from "@/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Atuacao />
        <Conteudos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
