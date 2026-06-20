"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/app/hooks/useCountdown";
import { weddingConfig } from "@/app/config/wedding";
import { CornerOrnament } from "./DecorativeIcons";
import Image from "next/image";

const WEEKDAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

function buildCalendarGrid(year: number, month: number) {
    // month: 1-indexed
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0).getDate();
    // getDay(): 0 = Sunday ... convert to Monday-first index
    const startOffset = (firstDay.getDay() + 6) % 7;

    const cells: (number | null)[] = Array(startOffset).fill(null);
    for (let d = 1; d <= lastDay; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);

    const rows: (number | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
        rows.push(cells.slice(i, i + 7));
    }
    return rows;
}

export default function CountdownCalendar() {
    const { ceremony, reception } = weddingConfig;
    const countdown = useCountdown(weddingConfig.eventDateTimeISO);
    const year = parseInt(ceremony.year, 10);
    const month = parseInt(ceremony.month, 10);
    const weddingDay = parseInt(ceremony.day, 10);
    const rows = buildCalendarGrid(year, month);

    const handleAddToCalendar = () => {
        const startDate = new Date(weddingConfig.eventDateTimeISO);
        const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000);
        const fmt = (d: Date) =>
            d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            "Lễ cưới Tuấn Kiệt & Thanh Hà",
        )}&dates=${fmt(startDate)}/${fmt(endDate)}&location=${encodeURIComponent(
            reception.venueName,
        )}&details=${encodeURIComponent("Trân trọng kính mời quý khách đến chung vui!")}`;
        window.open(url, "_blank");
    };

    return (
        <section className="relative bg-transparent bg-damask px-5 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2
                    className="font-serif text-sm uppercase tracking-[0.2em] text-gold-100 sm:text-base"
                    style={{ fontFamily: '"Baskerville", serif' }}
                >
                    Cùng đếm ngược
                </h2>
                {!countdown.isPast ? (
                    <p
                        className="mt-2 font-serif text-lg font-semibold text-gold sm:text-xl"
                        style={{ fontFamily: '"Baskerville", serif' }}
                    >
                        {countdown.days} ngày {countdown.hours} giờ{" "}
                        {countdown.minutes} phút {countdown.seconds} giây
                    </p>
                ) : (
                    <p className="mt-2 font-serif text-lg font-semibold text-gold sm:text-xl">
                        Hôn lễ đã diễn ra — Cảm ơn quý khách!
                    </p>
                )}
            </motion.div>

            {/* Calendar card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative mx-auto mt-8 max-w-sm rounded-2xl p-5 sm:p-6"
            >
                <Image
                    src="/images/frame-calendar.webp"
                    alt=""
                    width={600}
                    height={600}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%]  object-fill scale-x-125"
                />

                <p
                    className="text-center font-serif text-base font-semibold tracking-wide text-gold-100"
                    style={{ fontFamily: '"Baskerville", serif' }}
                >
                    Tháng {ceremony.month} / {ceremony.year}
                </p>

                <div className="mt-4 grid grid-cols-7 gap-y-2 text-center">
                    {WEEKDAYS.map((d) => (
                        <span
                            key={d}
                            className="font-body text-xs font-medium text-gold-200/70"
                            style={{ fontFamily: '"Baskerville", serif' }}
                        >
                            {d}
                        </span>
                    ))}
                </div>
                <div className="my-2 h-px bg-gold/30" />
                <div className="grid grid-cols-7 gap-y-3 text-center">
                    {rows.flat().map((day, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center"
                        >
                            {day === null ? (
                                <span />
                            ) : day === weddingDay ? (
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold font-serif text-sm font-bold text-wine">
                                    {day}
                                </span>
                            ) : (
                                <span
                                    className="font-body text-sm text-gold-100/90"
                                    style={{
                                        fontFamily: '"Baskerville", serif',
                                    }}
                                >
                                    {day}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="mt-6 text-center">
                <button
                    onClick={handleAddToCalendar}
                    className="font-body text-sm italic text-gold underline decoration-gold/50 underline-offset-4 transition hover:text-gold-100"
                >
                    Thêm vào lịch
                </button>
            </div>

            {/* Venue */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-12"
            >
                <div className="mx-auto w-fit rounded-full border border-gold/80 px-6 py-2.5">
                    <h3 className="font-serif text-sm tracking-[0.15em] text-gold-100 sm:text-base">
                        TIỆC CƯỚI SẼ TỔ CHỨC TẠI
                    </h3>
                </div>
                <p className="mx-auto mt-4 max-w-sm text-center font-body text-sm text-gold-200/80">
                    {reception.venueName}
                </p>

                <div className="relative mx-auto mt-5 h-48 max-w-sm overflow-hidden rounded-xl border border-gold/40 sm:h-56">
                    <iframe
                        src={reception.mapEmbedUrl}
                        className="h-full w-full"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bản đồ địa điểm tổ chức tiệc cưới"
                    />
                </div>
            </motion.div>
        </section>
    );
}
