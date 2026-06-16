import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Sobre mí", href: "#about" },
        { name: "Tecnologías", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "Certificaciones", href: "#certificates" },
        { name: "Experiencia", href: "#experience" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

                <a
                    href="#"
                    className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                    JR
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8 text-gray-300">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="hover:text-cyan-400 transition"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="/Jonas-Romano-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all duration-300"
                    >
                        CV
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-xl text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 px-6 py-6 border-t border-white/10">
                    <ul className="flex flex-col gap-5 text-gray-300">

                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-cyan-400 transition"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href="/Jonas-Romano-CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold"
                            >
                                Descargar CV
                            </a>
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;