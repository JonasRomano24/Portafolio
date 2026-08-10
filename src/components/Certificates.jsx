import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL; // resuelve a "/Portafolio/" en producción

const certificates = [
    {
        id: 1,
        title: ".NET",
        issuer: "Coursera",
        image: `${BASE}certificates/.Net Coursera.png`,
        file: `${BASE}certificates/.Net Coursera.pdf`,
    },
    {
        id: 2,
        title: "Asistencia Técnica",
        issuer: "Coursera",
        image: `${BASE}certificates/Asistencia tecnica Coursera.png`,
        file: `${BASE}certificates/Asistencia tecnica Coursera.pdf`,
    },
    {
        id: 3,
        title: "Consultas Básicas SQL",
        issuer: "Coursera",
        image: `${BASE}certificates/Consultas Basicas SQL.png`,
        file: `${BASE}certificates/Consultas Basicas SQL.png`,
    },
    {
        id: 4,
        title: "Desarrollo",
        issuer: "JAP",
        image: `${BASE}certificates/Desarrollo JAP.jpg`,
        file: `${BASE}certificates/Desarrollo JAP.jpg`,
    },
    {
        id: 5,
        title: "Desarrollo Web",
        issuer: "Coderhouse",
        image: `${BASE}certificates/Desarrollo Web Coder.png`,
        file: `${BASE}certificates/Desarrollo Web Coder.png`,
    },
    {
        id: 6,
        title: "Java",
        issuer: "Diploma",
        image: `${BASE}certificates/Java Diploma (1).png`,
        file: `${BASE}certificates/Java Diploma.pdf`,
    },
    {
        id: 7,
        title: "React JS",
        issuer: "Diploma",
        image: `${BASE}certificates/React.png`,
        file: `${BASE}certificates/React.pdf`,
    },
];


function Certificates() {
    return (
        <section
            id="certificates"
            className="px-6 py-32"
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

                    <p className="mt-8 text-slate-400 max-w-lg leading-relaxed">
                        Formación continua en desarrollo web,
                        tecnologías frontend, bases de datos y
                        herramientas modernas utilizadas en proyectos profesionales.
                    </p>

                    <div className="mt-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                            <span>{certificates.length}</span>
                            <span>certificaciones obtenidas</span>
                        </div>
                    </div>
                </motion.div>


                {/* Grid certificados */}
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
                                scale: 1.02,
                            }}

                            className="
                                group 
                                rounded-2xl 
                                border 
                                border-slate-800 
                                bg-slate-900 
                                overflow-hidden 
                                hover:border-cyan-500/50 
                                transition-all 
                                duration-300
                                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                            "
                        >


                            {/* Imagen certificado */}
                            <div className="h-52 overflow-hidden bg-slate-800">

                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="
                                        w-full 
                                        h-full 
                                        object-cover
                                        transition-transform
                                        duration-500
                                        group-hover:scale-110
                                    "
                                />

                            </div>



                            {/* Información */}
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

                                    className="
                                        inline-flex 
                                        items-center 
                                        gap-2 
                                        px-4 
                                        py-2 
                                        rounded-lg 
                                        bg-cyan-500/10 
                                        text-cyan-400 
                                        border 
                                        border-cyan-500/20 
                                        hover:bg-cyan-500 
                                        hover:text-slate-950 
                                        transition-all
                                    "
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
