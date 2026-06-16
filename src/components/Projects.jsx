import { motion } from "framer-motion";
import { projects } from "../data/projects";

function Projects() {
    return (
        <section
            id="projects"
            className="px-6 py-32"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                        Mis Proyectos
                    </h2><br />

                    <p className="text-gray-400">
                        Algunos de los proyectos que he desarrollado.
                    </p><br />
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-stretch">

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="h-full flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                        >
                            {project.image && (
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-1">

                                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-5 py-2 border border-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-black transition"
                                    >
                                        GitHub
                                    </a>

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-5 py-2 bg-cyan-500 text-black rounded-lg hover:opacity-80 transition"
                                        >
                                            Demo
                                        </a>
                                    )}

                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>

                <div className="flex justify-center mt-24">
                    <div className="w-72 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                </div>

            </div>
        </section>
    );
}

export default Projects;