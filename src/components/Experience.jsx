import { motion } from "framer-motion";

const experiences = [
    {
        company: "New Balance",
        period: "Oct 2024 - Ago 2025",
        role: "Vendedor y Atención al Cliente",
        description:
            "Atención y venta al cliente, manejo de caja, reposición de mercadería y tareas de depósito.",
    },
    {
        company: "El Naranjo",
        period: "Abr 2024 - Oct 2024",
        role: "Vendedor",
        description:
            "Atención al cliente, ventas y manejo de caja.",
    },
    {
        company: "Kilómetro Cero",
        period: "Jun 2022 - Jun 2023",
        role: "Atención al Cliente",
        description:
            "Atención al público, manejo de caja y control de stock.",
    },
    {
        company: "Iberpark SA",
        period: "Sep 2018 - Jun 2020",
        role: "Asistente Comercial",
        description:
            "Edición fotográfica, diseño de productos personalizados, ventas y manejo de Photoshop.",
    },
];

function Experience() {
    return (
        <section
            id="experience"
            className="px-6 py-32"
        >
            <div className="w-full flex flex-col items-center">

                {/* Estadísticas */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
                >
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-cyan-400">4+</h3>
                        <p className="text-slate-400 mt-2">Empresas</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-cyan-400">6</h3>
                        <p className="text-slate-400 mt-2">Certificaciones</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
                        <p className="text-slate-400 mt-2">Proyectos</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-cyan-400">9+</h3>
                        <p className="text-slate-400 mt-2">Años aprendiendo</p>
                    </div>
                </motion.div>
                <br />
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto flex flex-col items-center text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
                        Experiencia Profesional
                    </h2>
                    <br />
                    <p className="mt-8 text-slate-400 leading-relaxed">
                        Experiencia en atención al cliente,
                        resolución de problemas y trabajo con herramientas digitales.
                        <br />
                        <br />
                        Habilidades desarrolladas a través de diferentes entornos
                        laborales, con enfoque en la comunicación, organización
                        y adaptación constante.
                    </p><br />
                </motion.div>

                {/* Experiencia */}
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    {experiences.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="w-full mb-8"
                        >
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300">

                                <span className="text-cyan-400 text-sm">
                                    {job.period}
                                </span>

                                <h3 className="text-2xl font-semibold text-white mt-3">
                                    {job.company}
                                </h3>

                                <p className="text-cyan-300 mt-2">
                                    {job.role}
                                </p>

                                <p className="text-slate-400 mt-5 leading-relaxed">
                                    {job.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Experience;