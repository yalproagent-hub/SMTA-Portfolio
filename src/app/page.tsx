import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { Portfolio } from "@/components/sections/Portfolio";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Portfolio />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
