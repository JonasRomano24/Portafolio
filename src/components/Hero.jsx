import { motion } from "framer-motion";


function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">

            <div className="text-center max-w-4xl">

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-cyan-400 text-lg mb-4"
                >
                    Hola, soy
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold"
                >
                    Jonas Romano
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-4xl text-gray-300 mt-4"
                >
                    Frontend Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 mt-8 text-lg max-w-2xl mx-auto"
                >
                    Desarrollo aplicaciones web modernas utilizando React,
                    JavaScript y Firebase, enfocadas en rendimiento,
                    experiencia de usuario y diseño responsivo.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
                >
                    <a
                        href="#projects"
                        className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
                    >
                        Ver Proyectos
                    </a>

                    <a
                        href="#cv"
                        download
                        className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
                    >
                        Descargar CV
                    </a>
                </motion.div>

            </div>

        </section>
    );
}

export default Hero;