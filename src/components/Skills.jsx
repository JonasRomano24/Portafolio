import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";

import { SiFirebase } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 size={50} /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} /> },
    { name: "JavaScript", icon: <FaJs size={50} /> },
    { name: "React", icon: <FaReact size={50} /> },
    { name: "Firebase", icon: <SiFirebase size={50} /> },
    { name: "Git", icon: <FaGitAlt size={50} /> },
    { name: "GitHub", icon: <FaGithub size={50} /> },
];

function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                    Tecnologías
                </h2>

                <p className="text-gray-400 mb-12">
                    Herramientas y tecnologías que utilizo para desarrollar aplicaciones web.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                {skill.icon}
                            </div>

                            <h3 className="font-semibold">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;