import { useState } from "react";

function Terminal() {
    const [output, setOutput] = useState([
        "Bienvenido a la terminal de Jonas Romano",
        "Escribe un comando..."
    ]);

    const commands = {
        whoami: [
            "Jonas Romano",
            "Frontend Developer"
        ],

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Firebase",
            "Git",
            "GitHub"
        ],

        projects: [
            "ByteZone E-Commerce",
            "El Águila Fletes",
            "Simulación de Carrito",
            "Cartas Interactivas"
        ],

        contact: [
            "Email: jonas.romano24@outlook.com",
            "WhatsApp: +598 92 715 215"
        ]
    };

    const handleCommand = (e) => {
        if (e.key !== "Enter") return;

        const command = e.target.value.trim().toLowerCase();

        if (command === "clear") {
            setOutput([]);
            e.target.value = "";
            return;
        }

        if (commands[command]) {
            setOutput((prev) => [
                ...prev,
                `> ${command}`,
                ...commands[command]
            ]);
        } else {
            setOutput((prev) => [
                ...prev,
                `> ${command}`,
                "Comando no reconocido"
            ]);
        }

        e.target.value = "";
    };

    return (
        <section id="terminal" className="py-40 px-6">

            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Encabezado */}
                <div className="text-center mb-20">

                    <div className="w-32 h-px bg-cyan-500/40 mx-auto mb-8"></div>

                    <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
                        Terminal de Desarrollador
                    </h2><br />

                    <p className="text-gray-400 max-w-2xl">
                        Explora información sobre mí utilizando comandos
                        como si estuvieras en una terminal real.
                    </p><br />

                </div>

                {/* Terminal */}
                <div className="w-full max-w-5xl bg-black border border-cyan-500/30 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/10">

                    <div className="bg-zinc-900 px-4 py-3 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="p-6 font-mono text-green-400 min-h-[300px]">

                        {output.map((line, index) => (
                            <div key={index} className="mb-2">
                                {line}
                            </div>
                        ))}

                        <div className="flex items-center mt-4">
                            <span className="mr-2 text-cyan-400">$</span>

                            <input
                                type="text"
                                onKeyDown={handleCommand}
                                className="bg-transparent outline-none w-full"
                                placeholder="Escribe un comando..."
                            />
                        </div>

                    </div>

                </div>

                <p className="text-center text-gray-500 mt-6">
                    Comandos disponibles:
                    <span className="text-cyan-400"> whoami</span> ·
                    <span className="text-cyan-400"> skills</span> ·
                    <span className="text-cyan-400"> projects</span> ·
                    <span className="text-cyan-400"> contact</span> ·
                    <span className="text-cyan-400"> clear</span>
                </p>

            </div>

        </section>
    );
}

export default Terminal;