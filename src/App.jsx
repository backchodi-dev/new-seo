import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CaseStudies />
        <Services />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;