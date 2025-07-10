import Scene from "@/app/components/3d/Scene";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Projects from "@/app/sections/Projects";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Scene />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
