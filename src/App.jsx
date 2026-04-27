import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-textMain selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
