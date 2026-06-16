import { motion } from "framer-motion";

const certificates = [
    {
        id: 1,
        title: ".NET",
        issuer: "Coursera",
        file: "/certificates/.Net Coursera.pdf",
        type: "pdf",
    },
    {
        id: 2,
        title: "Asistencia Técnica",
        issuer: "Coursera",
        file: "/certificates/Asistencia tecnica Coursera.pdf",
        type: "pdf",
    },
    {
        id: 3,
        title: "Consultas Básicas SQL",
        issuer: "Coursera",
        file: "/certificates/Consultas Basicas SQL.png",
        type: "image",
    },
    {
        id: 4,
        title: "Desarrollo",
        issuer: "JAP",
        file: "/certificates/Desarrollo JAP.jpg",
        type: "image",
    },
    {
        id: 5,
        title: "Desarrollo Web",
        issuer: "Coderhouse",
        file: "/certificates/Desarrollo Web Coder.png",
        type: "image",
    },
    {
        id: 6,
        title: "Java",
        issuer: "Diploma",
        file: "/certificates/Java Diploma.pdf",
        type: "pdf",
    },
    {
        id: 7,
        title: "React JS",
        issuer: "Diploma",
        file: "/certificates/React.pdf",
        type: "pdf",
    },
];

function Certificates() {
    return (
        <section
            id="certificates"
            className="px-6 py-32 "
        >
            <div className="max-w-7xl mx-auto">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
                        Certificaciones
                    </h2>
                    <br />
                    <p className="mt-8 text-slate-400 max-w-lg mx-auto text-center leading-relaxed">
                        Formación continua en desarrollo web,
                        tecnologías frontend, bases de datos y
                        herramientas modernas utilizadas en proyectos profesionales.
                    </p>
                    <br />
                    <div className="mt-10 flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                            <span>{certificates.length}</span>
                            <span>certificaciones obtenidas</span>
                        </div>
                    </div><br />
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                            }}
                            className="group rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                        >
                            {/* Preview */}
                            <div className="h-52 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                                {certificate.type === "pdf" ? (
                                    <div className="text-center">
                                        <div className="text-6xl mb-2">📄</div>
                                        <p className="text-slate-400 text-sm">
                                            Documento PDF
                                        </p>
                                    </div>
                                ) : (
                                    <img
                                        src={certificate.file}
                                        alt={certificate.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {certificate.title}
                                </h3>

                                <p className="text-slate-400 mb-5">
                                    {certificate.issuer}
                                </p>

                                <a
                                    href={certificate.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300"
                                >
                                    Ver certificado
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificates;