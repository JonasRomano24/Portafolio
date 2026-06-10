import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import Background from "./components/Background";

function App() {
  return (
    
    <div className="bg-[#0a0a0a] text-white">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Terminal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;