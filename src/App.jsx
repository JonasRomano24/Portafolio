import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import Background from "./components/Background";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";

function App() {
  return (
    
    <div className="bg-[#0a0a0a] text-white">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div className="h-[30vh]"></div>
      <Certificates />
      <div className="h-[30vh]"></div>
      <Experience />
      <div className="h-[30vh]"></div>
      <Terminal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;