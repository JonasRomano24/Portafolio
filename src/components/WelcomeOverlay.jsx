import { useState, useEffect } from "react";
import { Music } from "lucide-react";

export default function WelcomeOverlay({ onEnter, name = "Jonas Romano" }) {
    const [visible, setVisible] = useState(true);
    const [fadingOut, setFadingOut] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        // pequeño delay para que el contenido aparezca con fade-in al cargar
        const timer = setTimeout(() => setContentVisible(true), 150);
        return () => clearTimeout(timer);
    }, []);

    const handleEnter = () => {
        onEnter();
        setFadingOut(true);
        setTimeout(() => setVisible(false), 700);
    };

    if (!visible) return null;

    return (
        <div
            onClick={handleEnter}
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-black via-neutral-900 to-black text-white cursor-pointer transition-opacity duration-700 ${fadingOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <div
                className={`flex flex-col items-center gap-6 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
            >
                <h1 className="text-3xl md:text-4xl tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {name}
                </h1>

                <Music size={26} strokeWidth={1} className="text-white/80 animate-pulse" />

                <p className="text-xs tracking-[0.3em] uppercase text-white/60">
                    Click para ingresar
                </p>
            </div>
        </div>
    );
}