"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/app/config/wedding";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function CoupleInfo() {
    const { groom, bride, ceremony } = weddingConfig;

    return (
        <section
            id="info"
            className="relative overflow-hidden bg-transparent bg-damask px-5 py-12"
        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                variants={fadeUp}
                className="relative z-10 mx-auto mb-10 w-fit rounded-full"
            >
                <h2 className="block rounded-full border border-gold/80 py-3 text-center font-serif text-sm font-bold tracking-[0.15em] text-gold-200 transition-colors hover:bg-gold/10 sm:text-base px-6 py-2.5">
                    THÔNG TIN LỄ CƯỚI
                </h2>
            </motion.div>

            {/* Parents */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                variants={fadeUp}
                className="relative z-10 mx-auto grid max-w-md grid-cols-2 gap-4 text-center"
            >
                <div className="border-r border-gold/30 pr-2">
                    <p className="font-body  text-xs uppercase tracking-wider text-gold-200/70">
                        Ông Bà
                    </p>
                    <p className="mt-1 font-serif text-sm font-semibold leading-relaxed text-gold-100 sm:text-base">
                        {groom.father}
                        <br />
                        {groom.mother}
                    </p>
                    <p
                        className="mt-2 font-body text-[11px] leading-snug text-gold-200/70 sm:text-xs"
                        style={{ fontFamily: '"Baskerville", serif' }}
                    >
                        {groom.address}
                    </p>
                </div>
                <div className="pl-2">
                    <p className="font-body text-xs uppercase tracking-wider text-gold-200/70">
                        Ông Bà
                    </p>
                    <p className="mt-1 font-serif text-sm font-semibold leading-relaxed text-gold-100 sm:text-base">
                        {bride.father}
                        <br />
                        {bride.mother}
                    </p>
                    <p
                        className="mt-2 font-body text-[11px] leading-snug text-gold-200/70 sm:text-xs"
                        style={{ fontFamily: '"Baskerville", serif' }}
                    >
                        {bride.address}
                    </p>
                </div>
            </motion.div>

            {/* Groom name */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                variants={fadeUp}
                className="relative z-10 mt-10 text-center"
            >
                <h3 className="font-serif text-3xl text-gold-gradient sm:text-4xl">
                    {groom.fullName}
                </h3>
                <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-gold-200/70">
                    {groom.title}
                </p>
            </motion.div>

            {/* Ampersand divider */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10 my-3 text-center"
            >
                <span className="font-serif text-3xl italic text-gold/90">
                    &amp;
                </span>
            </motion.div>

            {/* Bride name */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                variants={fadeUp}
                className="relative z-10 text-center"
            >
                <h3 className="font-serif text-3xl text-gold-gradient sm:text-4xl">
                    {bride.fullName}
                </h3>
                <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-gold-200/70">
                    {bride.title}
                </p>
            </motion.div>

            {/* Ceremony info */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                variants={fadeUp}
                className="relative z-10 mx-auto mt-10 max-w-sm text-center"
            >
                <p
                    className="font-body text-sm uppercase tracking-wide text-gold-200/80"
                    style={{ fontFamily: '"Baskerville", serif' }}
                >
                    {ceremony.location}
                </p>
                <p
                    className="mt-1 font-serif text-sm font-semibold tracking-wide text-gold-100"
                    style={{ fontFamily: '"Baskerville", serif' }}
                >
                    VÀO LÚC {ceremony.time}
                </p>

                <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
                    <div className="text-center">
                        <p
                            className="font-body text-xs uppercase tracking-wider text-gold-200/70"
                            style={{ fontFamily: '"Baskerville", serif' }}
                        >
                            {ceremony.weekday}
                        </p>
                    </div>
                    <div className="h-10 w-px bg-gold/40" />
                    <div className="text-center">
                        <p
                            className="font-serif text-4xl font-bold text-gold sm:text-5xl"
                            style={{ fontFamily: '"Baskerville", serif' }}
                        >
                            {ceremony.day}
                        </p>
                    </div>
                    <div className="h-10 w-px bg-gold/40" />
                    <div className="text-center">
                        <p
                            className="font-body text-xs uppercase tracking-wider text-gold-200/70"
                            style={{ fontFamily: '"Baskerville", serif' }}
                        >
                            Tháng {ceremony.month}
                        </p>
                    </div>
                </div>

                <p
                    className="mt-3 font-serif text-2xl text-gold-100"
                    style={{ fontFamily: '"Baskerville", serif' }}
                >
                    {ceremony.year}
                </p>
                <p
                    className="mt-2 font-body text-xs italic text-gold-200/60"
                    style={{ fontFamily: '"Baskerville", serif' }}
                >
                    ({ceremony.lunarDate})
                </p>
            </motion.div>
        </section>
    );
}
