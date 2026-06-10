import { motion } from "framer-motion";

function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex justify-center"
                >
                    <div className="w-72 h-72 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent flex items-center justify-center">
                        <span className="text-8xl font-bold text-cyan-400">
                            JR
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-cyan-400">
                        Sobre mí
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        Soy Jonas Romano, desarrollador frontend apasionado por la
                        creación de aplicaciones web modernas, intuitivas y responsivas.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-4">
                        Actualmente trabajo con React, JavaScript y Firebase,
                        desarrollando proyectos que combinan funcionalidad,
                        rendimiento y una experiencia de usuario atractiva.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        Mi objetivo es seguir creciendo profesionalmente,
                        incorporando nuevas tecnologías y participando en
                        proyectos cada vez más desafiantes.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

export default About;