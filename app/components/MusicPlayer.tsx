"use client";

import { useEffect, useRef, useState } from "react";
import { Music } from "lucide-react";
import { weddingConfig } from "@/app/config/wedding";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Bắt đầu từ giây 59
        audio.currentTime = 59;

        const tryPlay = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch {
                setIsPlaying(false);
            }
        };

        tryPlay();

        const handleFirstInteraction = () => {
            if (audio.paused) {
                audio
                    .play()
                    .then(() => setIsPlaying(true))
                    .catch(() => setIsPlaying(false));
            }
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
        };

        window.addEventListener("click", handleFirstInteraction);
        window.addEventListener("touchstart", handleFirstInteraction);
        window.addEventListener("scroll", handleFirstInteraction);

        return () => {
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
        };
    }, []);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) {
            audio.play().then(() => setIsPlaying(true));
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={weddingConfig.musicSrc}
                loop
                preload="auto"
            />
            <button
                onClick={toggle}
                aria-label={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
                className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-orange-500 shadow-lg shadow-black/30 transition-transform active:scale-90"
            >
                <span
                    className={`absolute inset-0 rounded-full bg-orange-400/60 ${
                        isPlaying ? "animate-ping" : ""
                    }`}
                />
                {isPlaying ? (
                    <span className="relative flex items-end gap-[2px]">
                        <span className="h-2 w-[3px] animate-pulse rounded-full bg-white [animation-duration:0.8s]" />
                        <span className="h-3.5 w-[3px] animate-pulse rounded-full bg-white [animation-duration:0.6s]" />
                        <span className="h-2.5 w-[3px] animate-pulse rounded-full bg-white [animation-duration:1s]" />
                    </span>
                ) : (
                    <Music className="relative h-5 w-5 text-white" />
                )}
            </button>
        </>
    );
}
