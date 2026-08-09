import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ProductProjects } from "@/components/ProductProjects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <Nav />
      <Hero />
      <About />
      <FeaturedProjects />
      <ProductProjects />
      <Experience />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
