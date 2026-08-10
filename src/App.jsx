import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import Background from "./components/Background";
import ParticlesBackground from "./components/ParticlesBackground";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import BackgroundMusic from "./BackgroundMusic";

function App() {
  return (

    <div className="relative isolate bg-[#0a0a0a] text-white">
      <Background />
      <ParticlesBackground />
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Experience />
      <Terminal />
      <Contact />
      <Footer />
      <BackgroundMusic src="/audio/musica-clasica.mp3" />
    </div>
  );
}

export default App;
