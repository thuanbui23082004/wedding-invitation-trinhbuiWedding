"use client";

import { useEffect, useRef, useState } from "react";

export default function AutoScrollWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [userActive, setUserActive] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const posRef = useRef(0);

    // Tốc độ scroll (px/frame) — ~0.4px mỗi 16ms ≈ 25px/giây
    const SPEED = 0.4;
    // Sau bao lâu không tương tác thì tự chạy lại (ms)
    const IDLE_MS = 3000;

    const stopAuto = () => {
        setUserActive(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setUserActive(false), IDLE_MS);
    };

    // Auto-scroll loop
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const step = () => {
            if (!userActive) {
                const maxScroll = el.scrollHeight - el.clientHeight;
                if (posRef.current >= maxScroll) {
                    // Về đầu khi chạm đáy
                    posRef.current = 0;
                } else {
                    posRef.current += SPEED;
                }
                el.scrollTop = posRef.current;
            } else {
                // Đồng bộ vị trí thực với posRef khi user cuộn
                posRef.current = el.scrollTop;
            }
            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [userActive]);

    // Lắng nghe tương tác người dùng
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const events = [
            "wheel",
            "touchstart",
            "touchmove",
            "mousedown",
            "keydown",
        ] as const;
        events.forEach((e) =>
            el.addEventListener(e, stopAuto, { passive: true }),
        );
        return () => events.forEach((e) => el.removeEventListener(e, stopAuto));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            ref={scrollRef}
            className="h-screen overflow-y-auto"
            style={{ scrollBehavior: "auto" }}
        >
            {children}
        </div>
    );
}
