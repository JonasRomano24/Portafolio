import aguila from "../assets/projects/aguila.png";
import carrito from "../assets/projects/carrito.png";
import cartas from "../assets/projects/cartas.png";
import react from "../assets/projects/react.png"

export const projects = [
    {
        title: "ByteZone E-Commerce",
        description:
            "E-commerce desarrollado con React y Firebase. Incluye catálogo de productos, carrito de compras, generación de órdenes y persistencia de datos.",
        tech: ["React", "Firebase", "JavaScript", "Vite"],
        github: "https://github.com/JonasRomano24/e-commerce-coder-react",
        demo: "",
        image: react,
    },

    {
        title: "El Águila Fletes",
        description:
            "Sitio web profesional para una empresa de fletes y mudanzas.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/JonasRomano24/ElAguila",
        demo: "https://elaguilafletes.com.uy",
        image: aguila,
    },

    {
        title: "Simulación de Carrito",
        description:
            "Proyecto realizado con JavaScript puro simulando un carrito de compras.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/JonasRomano24/ProyectoFinal-Romano",
        demo: "",
        image: carrito,
    },

    {
        title: "Cartas",
        description:
            "Aplicación interactiva enfocada en manipulación del DOM y eventos.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/JonasRomano24/cartas",
        demo: "",
        image: cartas,
    },
];