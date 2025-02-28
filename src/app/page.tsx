import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skils";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
