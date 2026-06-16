import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-5xl">

                {/* Estado laboral */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-green-500/30 bg-green-500/10 text-green-400"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    Disponible para oportunidades laborales
                </motion.div>

                {/* Hola soy */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-cyan-400 text-lg mb-4"
                >
                    Hola, soy
                </motion.p>

                {/* Nombre */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent"
                >
                    Jonas Romano
                </motion.h1>

                {/* Cargo */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-4xl text-gray-300 mt-4"
                >
                    Frontend Developer | React & JavaScript
                </motion.h2>

                {/* Descripción */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 mt-8 text-lg max-w-3xl mx-auto leading-relaxed"
                >
                    Desarrollo aplicaciones web modernas utilizando React,
                    JavaScript y Firebase.
                    <br />
                    <br />
                    Me enfoco en crear experiencias intuitivas,
                    interfaces responsivas y soluciones orientadas al usuario.
                </motion.p>

                {/* Estadísticas */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 max-w-3xl mx-auto"
                >
                    <div>
                        <h3 className="text-3xl font-bold text-cyan-400">
                            5+
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Proyectos
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-cyan-400">
                            6
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Certificaciones
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-cyan-400">
                            4+
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Experiencias
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-cyan-400">
                            3+
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Años aprendiendo
                        </p>
                    </div>
                </motion.div>
                <br />
                {/* Botones */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
                >
                    <a
                        href="#projects"
                        className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
                    >
                        Ver Proyectos
                    </a>

                    <a
                        href="/Jonas%20Romano%20CV.pdf"
                        download
                        className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition"
                    >
                        Descargar CV
                    </a>
                </motion.div>
                <br />
                {/* Redes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex justify-center gap-8 mt-8 text-gray-400"
                >
                    <a
                        href="https://github.com/jonasromano24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jonas-romano-18c/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:jonas.romano24@outlook.com"
                        className="hover:text-cyan-400 transition"
                    >
                        Email
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;