import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-cyan-400">
                    JR
                </h1>

                <ul className="hidden md:flex gap-8 text-gray-300">
                    <li>
                        <a href="#about" className="hover:text-cyan-400 transition">
                            Sobre mí
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-cyan-400 transition">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-cyan-400 transition">
                            Proyectos
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-cyan-400 transition">
                            Contacto
                        </a>
                    </li>
                </ul>

                <button
                    className="md:hidden text-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-black/95 px-6 py-4">
                    <ul className="flex flex-col gap-4 text-gray-300">
                        <li>
                            <a href="#about">Sobre mí</a>
                        </li>

                        <li>
                            <a href="#skills">Skills</a>
                        </li>

                        <li>
                            <a href="#projects">Proyectos</a>
                        </li>

                        <li>
                            <a href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;