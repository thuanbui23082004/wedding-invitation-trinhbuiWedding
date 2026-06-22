"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/app/config/wedding";
import { BirdIcon } from "./DecorativeIcons";
import Image from "next/image";

export default function DressCodeSchedule() {
    const { dressCode, schedule } = weddingConfig;

    return (
        <section className="relative bg-transparent bg-damask px-5 py-12">
            {/* Dress code */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2 className="font-serif text-lg font-semibold tracking-[0.1em] text-gold-100 sm:text-xl">
                    DRESS CODE
                </h2>
                <p className="mt-1 font-body text-sm text-gold-200/70">
                    Trang phục dự tiệc
                </p>

                <div className="mt-5 flex items-center justify-center gap-4">
                    {dressCode.map((color, i) => (
                        <motion.span
                            key={color}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="h-10 w-10 rounded-full border border-white/20 shadow-md sm:h-12 sm:w-12"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </motion.div> */}

            {/* Schedule timeline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-14 text-center"
            >
                <h2 className="font-serif text-lg font-semibold tracking-[0.1em] text-gold-100 sm:text-xl">
                    LỊCH TRÌNH NGÀY CƯỚI
                </h2>
            </motion.div>

            <div className="relative mx-auto mt-8 max-w-sm">
                {/* vertical line */}
                <div className="absolute bottom-3 left-[88px] top-3 w-px bg-gold/40 sm:left-[96px]" />

                <ul className="space-y-7">
                    {schedule.map((item, i) => (
                        <motion.li
                            key={item.label}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="relative flex min-h-20 items-start gap-4"
                        >
                            <span
                                className="w-16 shrink-0 text-right font-serif text-base font-semibold text-gold-100 sm:w-20"
                                style={{ fontFamily: '"Baskerville", serif' }}
                            >
                                {item.time}
                            </span>
                            <span className="relative z-10 h-2.5 w-2.5 shrink-0 rounded-full bg-gold ring-4 ring-wine" />
                            <span className="font-body text-base text-gold-200">
                                {item.label}
                            </span>

                            {(i === 1 || i === 2) && (
                                <Image
                                    src="/images/chim-en.webp"
                                    alt=""
                                    width={128}
                                    height={80}
                                    className="h-16 w-auto -rotate-12 scale-x-[-1] sm:h-20 md:h-20"
                                />
                            )}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
