import { useRef, useState, useImperativeHandle, forwardRef } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = forwardRef(function BackgroundMusic(
    { src = `${import.meta.env.BASE_URL}audio/musica-clasica.mp3` },
    ref
) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    useImperativeHandle(ref, () => ({
        start: () => {
            if (audioRef.current) {
                audioRef.current.play();
                setIsPlaying(true);
            }
        },
    }));

    const togglePlay = () => {
        if (!audioRef.current) return;
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!audioRef.current) return;
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-2 rounded-full shadow-md">
            <audio ref={audioRef} src={src} loop preload="auto" />
            <button onClick={togglePlay} aria-label={isPlaying ? "Pausar música" : "Reproducir música"} className="p-2 rounded-full hover:bg-gray-100 transition">
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button onClick={toggleMute} aria-label={isMuted ? "Activar sonido" : "Silenciar"} className="p-2 rounded-full hover:bg-gray-100 transition">
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
        </div>
    );
});

export default BackgroundMusic;