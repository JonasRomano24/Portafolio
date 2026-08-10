import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mediaQuery.matches);

        const handleChange = (e) => setReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    if (reducedMotion) return null;

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -5,
                },

                background: {
                    color: {
                        value: "transparent",
                    },
                },

                fpsLimit: 60,

                particles: {
                    color: {
                        value: "#22d3ee",
                    },

                    links: {
                        color: "#22d3ee",
                        distance: 140,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },

                    move: {
                        enable: true,
                        speed: 0.6,
                        outModes: {
                            default: "out",
                        },
                    },

                    number: {
                        value: 35,
                        density: {
                            enable: true,
                            area: 900,
                        },
                    },

                    opacity: {
                        value: 0.25,
                    },

                    size: {
                        value: {
                            min: 1,
                            max: 2.5,
                        },
                    },
                },

                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 160,
                            links: {
                                opacity: 0.4,
                            },
                        },
                    },
                },

                detectRetina: true,
            }}
        />
    );
}

export default ParticlesBackground;
