"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { weddingConfig } from "@/app/config/wedding";

const coinPositions = [
    { top: "5%", left: "-8%", delay: 0 },
    { top: "15%", right: "-10%", delay: 0.4 },
    { top: "55%", left: "-12%", delay: 0.8 },
    { top: "70%", right: "-8%", delay: 1.2 },
    { top: "85%", left: "-4%", delay: 1.6 },
];

interface BankCard {
    label: string; // "Chú Rể" | "Cô Dâu"
    fullName: string; // "NGUYEN TUAN KIET"
    bankName: string;
    accountNumber: string;
    accountName: string;
    qrImage?: string; // optional: đường dẫn ảnh QR tĩnh, nếu có
}

function QRBlock({ card }: { card: BankCard }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Tạo QR bằng VietQR API (public, không cần key)
    // Format: https://img.vietqr.io/image/{bank}-{account}-compact2.png?accountName={name}
    const bankSlug = card.bankName.toLowerCase().replace(/\s/g, "");
    const qrUrl = card.qrImage
        ? card.qrImage
        : `https://img.vietqr.io/image/${bankSlug}-${card.accountNumber}-compact2.png?accountName=${encodeURIComponent(card.accountName)}&addInfo=Mung+cuoi`;

    const handleSave = async () => {
        try {
            const res = await fetch(qrUrl);
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `QR_${card.label.replace(/\s/g, "_")}.png`;
            a.click();
            URL.revokeObjectURL(url);
        } catch {
            // fallback: mở tab mới
            window.open(qrUrl, "_blank");
        }
    };

    return (
        <div className="flex flex-col items-center gap-3">
            {/* Label */}
            <p
                className="font-serif text-sm font-semibold tracking-widest text-[#c9963a]"
                style={{
                    fontFamily: '"Baskerville", serif',
                }}
            >
                {card.label} · {card.fullName}
            </p>

            {/* QR */}
            <div className="rounded-2xl bg-white p-3 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={qrUrl}
                    alt={`QR ${card.label}`}
                    width={200}
                    height={200}
                    className="h-[200px] w-[200px] object-contain"
                    crossOrigin="anonymous"
                />
            </div>

            {/* Bank info */}
            <div className="text-center">
                <p
                    className="text-sm text-[#c9963a]/80"
                    style={{
                        fontFamily: '"Baskerville", serif',
                    }}
                >
                    {card.bankName}
                </p>
                <p
                    className="text-sm text-[#c9963a]/80"
                    style={{
                        fontFamily: '"Baskerville", serif',
                    }}
                >
                    {card.accountNumber}
                </p>
                <p
                    className="mt-0.5 font-bold text-sm text-[#e8c97a] tracking-wide"
                    style={{
                        fontFamily: '"Baskerville", serif',
                    }}
                >
                    {card.accountName}
                </p>
            </div>

            {/* Lưu QR */}
            <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-1.5 rounded-full border border-[#c9963a]/50 bg-[#c9963a]/10 px-5 py-1.5 text-sm text-[#c9963a] transition hover:bg-[#c9963a]/20"
            >
                <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0 0l-3-3m3 3l3-3M12 4v4"
                    />
                </svg>
                Lưu QR
            </button>
        </div>
    );
}

export default function RedEnvelope() {
    const [opened, setOpened] = useState(false);
    const { groomBank, brideBank } = weddingConfig.bankInfo;

    const groomCard: BankCard = {
        label: "Chú Rể",
        fullName: groomBank.accountName,
        bankName: groomBank.bankName,
        accountNumber: groomBank.accountNumber,
        accountName: groomBank.accountName,
        qrImage: groomBank.qrImage, // nếu config có field qrImage
    };

    const brideCard: BankCard = {
        label: "Cô Dâu",
        fullName: brideBank.accountName,
        bankName: brideBank.bankName,
        accountNumber: brideBank.accountNumber,
        accountName: brideBank.accountName,
        qrImage: brideBank.qrImage,
    };

    return (
        <section className="relative overflow-hidden bg-transparent px-5 py-12">
            {/* Tiêu đề section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2
                    className="font-serif text font-semibold tracking-[0.1em] text-gold-100 sm:text-xl"
                    style={{
                        fontFamily: '"Baskerville", serif',
                    }}
                >
                    PHONG BAO MỪNG CƯỚI
                </h2>
            </motion.div>

            {/* Phong bao + coin decorations */}
            <div className="relative mx-auto mt-10 flex h-64 max-w-xs items-center justify-center">
                {coinPositions.map((pos, i) => (
                    <motion.div
                        key={i}
                        className="pointer-events-none absolute h-6 w-6 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 shadow-[0_0_12px_rgba(250,204,21,0.6)]"
                        style={pos as React.CSSProperties}
                        animate={{ y: [0, -10, 0], opacity: [0.9, 1, 0.9] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: pos.delay,
                            ease: "easeInOut",
                        }}
                    >
                        <span className="flex h-full w-full items-center justify-center font-serif text-[10px] font-bold text-amber-800">
                            財
                        </span>
                    </motion.div>
                ))}

                <div className="absolute h-44 w-44 rounded-full bg-orange-500/20 blur-3xl" />

                {/* Phong bao */}
                <motion.button
                    onClick={() => setOpened(true)}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    animate={{ rotate: [0, -1.5, 1.5, 0] }}
                    transition={{ rotate: { duration: 2.4, repeat: Infinity } }}
                    className="relative z-10 flex h-48 w-36 flex-col items-center justify-center rounded-xl border-2 border-[#c9963a] bg-gradient-to-b from-red-600 to-red-800 shadow-2xl"
                    aria-label="Nhấn để mở phong bao"
                >
                    <span className="absolute left-2 top-2 h-5 w-5 rounded-tl-md border-l-2 border-t-2 border-[#c9963a]" />
                    <span className="absolute right-2 top-2 h-5 w-5 rounded-tr-md border-r-2 border-t-2 border-[#c9963a]" />
                    <span className="absolute bottom-2 left-2 h-5 w-5 rounded-bl-md border-b-2 border-l-2 border-[#c9963a]" />
                    <span className="absolute bottom-2 right-2 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-[#c9963a]" />
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c9963a] bg-red-700">
                        <span className="font-serif text-2xl text-[#c9963a]">
                            囍
                        </span>
                    </div>
                </motion.button>
            </div>

            <p className="mt-5 text-center font-body text-sm text-gold-200/70">
                Nhấn để mở
            </p>

            {/* ── POPUP ── */}
            <AnimatePresence>
                {opened && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                            onClick={() => setOpened(false)}
                        />

                        {/* Popup sheet từ dưới lên */}
                        <motion.div
                            key="popup"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 28,
                                stiffness: 300,
                            }}
                            className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-[480px] overflow-y-auto rounded-t-3xl bg-[#5c0c0c] shadow-2xl"
                            style={{ maxHeight: "92dvh" }}
                        >
                            {/* Header cam */}
                            <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-[#f0a96a] to-[#e89050] px-3 py-4">
                                <h3
                                    className="flex-1 text-center font-serif text-base font-bold tracking-[0.15em] text-[#7a2a00]"
                                    style={{
                                        fontFamily: '"Baskerville", serif',
                                    }}
                                >
                                    PHONG BAO MỪNG CƯỚI
                                </h3>
                                <div className="flex flex-1 justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setOpened(false)}
                                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7a2a00]/20 text-[#7a2a00] hover:bg-[#7a2a00]/30"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            {/* Nội dung */}
                            <div className="flex flex-col gap-10 px-6 py-8">
                                <QRBlock card={groomCard} />
                                <div className="h-px bg-[#c9963a]/20" />
                                <QRBlock card={brideCard} />
                            </div>

                            {/* bottom safe area */}
                            <div className="h-6" />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
