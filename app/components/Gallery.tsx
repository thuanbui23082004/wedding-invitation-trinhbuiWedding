"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/app/config/wedding";

const SLIDE_VARIANTS = {
    enter: (dir: number) => ({
        x: dir > 0 ? "100%" : "-100%",
        scale: 0.85,
        opacity: 0,
        rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
        x: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
        transition: {
            x: { type: "spring", stiffness: 280, damping: 28 },
            scale: { duration: 0.4, ease: "easeOut" },
            opacity: { duration: 0.3 },
            rotateY: { duration: 0.45, ease: "easeOut" },
        },
    },
    exit: (dir: number) => ({
        x: dir > 0 ? "-60%" : "60%",
        scale: 0.75,
        opacity: 0,
        rotateY: dir > 0 ? -20 : 20,
        transition: {
            x: { type: "spring", stiffness: 280, damping: 28 },
            scale: { duration: 0.35 },
            opacity: { duration: 0.25 },
        },
    }),
};

export default function Gallery() {
    const images = weddingConfig.gallery;
    const [[index, dir], setPage] = useState([0, 0]);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = (newDir: 1 | -1) => {
        setPage(([prev]) => [
            (prev + newDir + images.length) % images.length,
            newDir,
        ]);
        resetAuto();
    };

    const jumpTo = (i: number) => {
        setPage(([prev]) => [i, i > prev ? 1 : -1]);
        resetAuto();
    };

    const resetAuto = () => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setPage(([prev]) => [(prev + 1) % images.length, 1]);
        }, 4000);
    };

    useEffect(() => {
        resetAuto();
        return () => {
            if (autoRef.current) clearInterval(autoRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images.length]);

    const prev = (index - 1 + images.length) % images.length;
    const next = (index + 1) % images.length;

    return (
        <section
            id="album"
            className="relative overflow-hidden bg-transparent bg-damask px-5 py-12"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-10 w-fit rounded-full border border-gold/80 px-6 py-2.5"
            >
                <h2 className="font-serif text-sm tracking-[0.2em] text-gold-100 sm:text-base">
                    ALBUM ẢNH CƯỚI
                </h2>
            </motion.div>

            {/* ── Carousel ── */}
            <div
                className="relative mx-auto flex h-[420px] max-w-md items-center justify-center sm:h-[500px]"
                style={{ perspective: "1000px" }}
            >
                {/* Ảnh bên trái mờ */}
                <motion.div
                    key={`prev-${prev}`}
                    className="absolute left-0 top-1/2 z-0 h-52 w-28 -translate-y-1/2 cursor-pointer overflow-hidden rounded-2xl sm:h-60 sm:w-32"
                    style={{ transformOrigin: "right center" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.4, x: 0, scale: 0.88 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => goTo(-1)}
                >
                    <Image
                        src={images[prev]}
                        alt="prev"
                        fill
                        sizes="128px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>

                {/* Ảnh bên phải mờ */}
                <motion.div
                    key={`next-${next}`}
                    className="absolute right-0 top-1/2 z-0 h-52 w-28 -translate-y-1/2 cursor-pointer overflow-hidden rounded-2xl sm:h-60 sm:w-32"
                    style={{ transformOrigin: "left center" }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.4, x: 0, scale: 0.88 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => goTo(1)}
                >
                    <Image
                        src={images[next]}
                        alt="next"
                        fill
                        sizes="128px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>

                {/* Ảnh chính */}
                <div
                    className="relative z-10 h-[360px] w-[270px] sm:h-[440px] sm:w-[330px]"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Viền vàng glow */}
                    <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-[#e8c97a] via-[#c9963a] to-[#e8c97a] opacity-70 blur-[2px]" />

                    <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
                        <AnimatePresence
                            initial={false}
                            custom={dir}
                            mode="popLayout"
                        >
                            <motion.div
                                key={index}
                                custom={dir}
                                variants={SLIDE_VARIANTS}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.15}
                                onDragEnd={(_, info) => {
                                    if (info.offset.x < -50) goTo(1);
                                    else if (info.offset.x > 50) goTo(-1);
                                }}
                            >
                                <Image
                                    src={images[index]}
                                    alt={`Ảnh cưới ${index + 1}`}
                                    fill
                                    sizes="330px"
                                    className="object-cover"
                                    priority
                                />
                                {/* Gradient overlay bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Nav buttons */}
                <button
                    onClick={() => goTo(-1)}
                    aria-label="Ảnh trước"
                    className="absolute left-[calc(50%-148px)] top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-xl text-[#e8c97a] backdrop-blur-sm transition hover:bg-black/60 sm:left-[calc(50%-170px)]"
                >
                    ‹
                </button>
                <button
                    onClick={() => goTo(1)}
                    aria-label="Ảnh sau"
                    className="absolute right-[calc(50%-148px)] top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-xl text-[#e8c97a] backdrop-blur-sm transition hover:bg-black/60 sm:right-[calc(50%-170px)]"
                >
                    ›
                </button>
            </div>

            {/* Dots indicator */}
            <div className="mt-5 flex items-center justify-center gap-1.5">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => jumpTo(i)}
                        className={`transition-all duration-300 rounded-full ${
                            i === index
                                ? "w-6 h-2 bg-[#c9963a]"
                                : "w-2 h-2 bg-[#c9963a]/30 hover:bg-[#c9963a]/60"
                        }`}
                        aria-label={`Ảnh ${i + 1}`}
                    />
                ))}
            </div>

            <p className="mt-2 text-center font-body text-xs text-gold-200/50">
                {index + 1} / {images.length}
            </p>

            {/* Reception info — giữ nguyên như cũ */}
            <div className="mx-auto mt-8 max-w-sm text-center">
                <p className="font-body text-sm uppercase tracking-wide text-gold-200/80">
                    Tiệc cưới sẽ diễn ra vào lúc:
                </p>
                <p
                    className="mt-2 font-serif text-2xl font-semibold text-gold sm:text-3xl"
                    style={{ fontFamily: '"Baskerville", serif' }}
                >
                    {weddingConfig.reception.welcomeTime}
                </p>

                <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
                    <p
                        className="font-body text-xs uppercase tracking-wider text-gold-200/70"
                        style={{ fontFamily: '"Baskerville", serif' }}
                    >
                        {weddingConfig.reception.weekday}
                    </p>
                    <div className="h-10 w-px bg-gold/40" />
                    <p
                        className="font-serif text-4xl font-bold text-gold sm:text-5xl"
                        style={{ fontFamily: '"Baskerville", serif' }}
                    >
                        {weddingConfig.reception.day}
                    </p>
                    <div className="h-10 w-px bg-gold/40" />
                    <p
                        className="font-body text-xs uppercase tracking-wider text-gold-200/70"
                        style={{ fontFamily: '"Baskerville", serif' }}
                    >
                        Tháng {weddingConfig.reception.month}
                    </p>
                </div>

                <p className="mt-3 font-body text-xs italic text-gold-200/60">
                    ({weddingConfig.reception.lunarDate})
                </p>

                <div className="mx-auto mt-6 flex max-w-xs items-center justify-around">
                    <div className="text-center">
                        <p className="font-body text-xs uppercase tracking-wider text-gold-200/70">
                            Đón khách
                        </p>
                        <p
                            className="mt-1 font-serif text-lg font-semibold text-gold-100"
                            style={{ fontFamily: '"Baskerville", serif' }}
                        >
                            {weddingConfig.reception.welcomeTime}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="font-body text-xs uppercase tracking-wider text-gold-200/70">
                            Khai tiệc
                        </p>
                        <p
                            className="mt-1 font-serif text-lg font-semibold text-gold-100"
                            style={{ fontFamily: '"Baskerville", serif' }}
                        >
                            {weddingConfig.reception.partyTime}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
