import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-5xl w-full">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                        Contacto
                    </h2>

                    <p className="text-gray-400">
                        ¿Tenés una propuesta, proyecto o consulta? Podés contactarme por cualquiera de estos medios.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Información de contacto
                        </h3>

                        <div className="space-y-5">

                            <a
                                href="mailto:jonas.romano24@outlook.com"
                                className="flex items-center gap-4 hover:text-cyan-400 transition"
                            >
                                <FaEnvelope size={24} />
                                <span>jonas.romano24@outlook.com</span>
                            </a>

                            <a
                                href="https://github.com/JonasRomano24"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 hover:text-cyan-400 transition"
                            >
                                <FaGithub size={24} />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jonas-romano-18c/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 hover:text-cyan-400 transition"
                            >
                                <FaLinkedin size={24} />
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://wa.me/59892715215"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 hover:text-cyan-400 transition"
                            >
                                <FaWhatsapp size={24} />
                                <span>WhatsApp</span>
                            </a>

                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Disponibilidad
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Actualmente me encuentro abierto a oportunidades laborales,
                            proyectos freelance y colaboraciones relacionadas con el desarrollo web.
                        </p>

                        <div className="mt-8">
                            <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400">
                                Disponible para trabajar
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;