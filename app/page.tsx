import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-blue-500/30 selection:text-blue-200">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}