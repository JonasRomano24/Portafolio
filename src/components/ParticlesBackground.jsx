import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },

                background: {
                    color: {
                        value: "#0a0a0a",
                    },
                },

                fpsLimit: 60,

                particles: {
                    color: {
                        value: "#00ffff",
                    },

                    links: {
                        color: "#00ffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },

                    move: {
                        enable: true,
                        speed: 1,
                    },

                    number: {
                        value: 60,
                    },

                    opacity: {
                        value: 0.3,
                    },

                    size: {
                        value: {
                            min: 1,
                            max: 3,
                        },
                    },
                },

                detectRetina: true,
            }}
        />
    );
}

export default ParticlesBackground;