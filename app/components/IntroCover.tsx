"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { weddingConfig } from "@/app/config/wedding";

// Mỗi bong bóng chữ hỷ
interface HiBubble {
    id: number;
    x: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
}

function generateBubbles(count: number): HiBubble[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: 5 + Math.random() * 90, // % từ trái
        size: 12 + Math.random() * 22, // px: 12–34 (nhỏ lại)
        duration: 6 + Math.random() * 8, // giây bay lên
        delay: Math.random() * 10, // giây trễ
        opacity: 0.25 + Math.random() * 0.45, // độ mờ ban đầu (rõ hơn)
    }));
}

export default function IntroCover({ onOpen }: { onOpen: () => void }) {
    const [bubbles, setBubbles] = useState<HiBubble[]>([]);

    useEffect(() => {
        setBubbles(generateBubbles(18));
    }, []);
    const [opening, setOpening] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        setOpening(true);
        // Đợi animation xong rồi mới chuyển trang
        setTimeout(() => {
            onOpen();
        }, 900);
    };

    return (
        <main
            ref={containerRef}
            className={`
                relative min-h-screen overflow-hidden
                flex items-center justify-center
                bg-[#6b0e0e]
                transition-all duration-700
                ${opening ? "scale-100" : ""}
            `}
            style={{
                background:
                    "radial-gradient(ellipse at 60% 30%, #8b1a1a 0%, #4a0808 60%, #2d0505 100%)",
            }}
        >
            {/* ── Chữ hỷ nổi như bong bóng ── */}
            {bubbles.map((b) => (
                <span
                    key={b.id}
                    className={`pointer-events-none absolute select-none font-serif text-[#c9963a] transition-none z-50
                        ${opening ? "animate-hi-burst" : "animate-hi-float"}
                    `}
                    style={{
                        left: `${b.x}%`,
                        bottom: "-60px",
                        fontSize: `${b.size}px`,
                        opacity: b.opacity,
                        animationDuration: opening ? "0.7s" : `${b.duration}s`,
                        animationDelay: opening ? "0s" : `${b.delay}s`,
                        animationFillMode: "both",
                        lineHeight: 1,
                        willChange: "transform, opacity",
                    }}
                >
                    囍
                </span>
            ))}

            {/* ── Card trung tâm ── */}
            <div
                className={`
                    relative mx-4 w-full max-w-[360px]
                    rounded-[2rem] border border-[#d4af6a]/35
                    bg-[#7a0014]/50
                    backdrop-blur-sm
                    shadow-xl shadow-black/30
                    px-8 py-10 text-center
                    flex flex-col items-center gap-5
                    overflow-hidden
                    transition-all duration-700 ease-in-out
                    ${opening ? "scale-[1.08] opacity-0 -translate-y-8" : "scale-100 opacity-100"}
                `}
            >
                {/* Hình rồng chìm - góc trái dưới */}
                <div
                    className={`
  pointer-events-none absolute top-40 left-[-2rem] w-[220px]
  opacity-45 transition-all duration-700
  ${opening ? "scale-[2]" : "scale-100"}
`}
                    aria-hidden="true"
                >
                    <Image
                        src="/images/rong.webp"
                        alt=""
                        width={440}
                        height={440}
                        className="w-full"
                    />
                </div>

                {/* Hình phượng chìm - góc phải trên */}
                <div
                    className={`
                        pointer-events-none absolute -top-6 -right-8 w-[200px] opacity-45
                        transition-all duration-700
                        ${opening ? "scale-[2] opacity-0" : "scale-100"}
                    `}
                    // aria-hidden="true"
                >
                    <Image
                        src="/images/phung.webp"
                        alt=""
                        width={400}
                        height={400}
                        className="w-full"
                    />
                </div>

                {/* Icon 囍 tròn */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#c9963a]/60 bg-[#c9963a]/15 shadow-lg shadow-black/30">
                    <Image
                        src="/images/chu-hy.webp"
                        alt="囍"
                        width={56}
                        height={56}
                        className="h-14 w-14 object-contain"
                    />
                </div>

                {/* Tên cô dâu chú rể */}
                <div className="relative z-10">
                    <h1 className="font-serif text-4xl font-semibold text-[#e8c97a] drop-shadow-sm">
                        {weddingConfig.groom.shortName}
                    </h1>
                    <p className="my-1 text-xl text-[#c9963a]/80">&amp;</p>
                    <h2 className="font-serif text-4xl font-semibold text-[#e8c97a] drop-shadow-sm">
                        {weddingConfig.bride.shortName}
                    </h2>
                </div>

                {/* Divider trang trí */}
                <div className="relative z-10 flex w-full items-center justify-center gap-2">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9963a]/50" />

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9963a]/50" />
                </div>

                {/* Ngày */}
                <p
                    className="relative z-10 font-semibold text-[#e8c97a] tracking-wide"
                    style={{
                        fontFamily: '"Baskerville", serif',
                    }}
                >
                    {weddingConfig.reception.day} tháng{" "}
                    {weddingConfig.reception.month},{" "}
                    {weddingConfig.ceremony.year}
                </p>

                {/* Thân mời */}
                <p className="relative z-10 font-semibold text-[#e8c97a]/90 tracking-[0.15em] text-sm uppercase">
                    Thân Mời
                </p>

                {/* Nút mở thiệp */}
                <button
                    type="button"
                    onClick={handleOpen}
                    disabled={opening}
                    className="relative z-10 mt-2 w-full rounded-full bg-gradient-to-r from-[#f5c87a] to-[#e8a84a] py-3.5 text-base font-bold text-[#5c0c0c] shadow-lg shadow-black/30 transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                >
                    Mở thiệp
                </button>
            </div>

            {/* ── Keyframes qua style tag ── */}
            <style jsx>{`
                @keyframes hi-float {
                    0% {
                        transform: translateY(0) scale(1) rotate(0deg);
                        opacity: var(--op, 0.25);
                    }
                    30% {
                        transform: translateY(-30vh) scale(1.08) rotate(-4deg);
                        opacity: calc(var(--op, 0.25) * 1.2);
                    }
                    70% {
                        transform: translateY(-70vh) scale(0.92) rotate(6deg);
                        opacity: calc(var(--op, 0.25) * 0.6);
                    }
                    100% {
                        transform: translateY(-105vh) scale(0.7) rotate(-2deg);
                        opacity: 0;
                    }
                }

                @keyframes hi-burst {
                    0% {
                        transform: translateY(var(--curr-y, -20vh)) scale(1);
                        opacity: 0.35;
                    }
                    60% {
                        transform: translateY(var(--curr-y, -20vh)) scale(3.5);
                        opacity: 0.2;
                    }
                    100% {
                        transform: translateY(var(--curr-y, -20vh)) scale(6);
                        opacity: 0;
                    }
                }

                .animate-hi-float {
                    animation-name: hi-float;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                }

                .animate-hi-burst {
                    animation-name: hi-burst;
                    animation-timing-function: ease-out;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                }
            `}</style>
        </main>
    );
}
