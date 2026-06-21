"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingConfig } from "@/app/config/wedding";

export default function HeroBanner() {
    const { groom, bride } = weddingConfig;
    const groomNameLines = groom.shortName.toUpperCase().split(" ");
    const brideNameLines = bride.shortName.toUpperCase().split(" ");
    const framePath =
        "M228.5 1055 C334.984 1055 441.468 1055.014 547.953 1054.954 C552.565 1054.951 557.299 1054.816 561.77 1053.818 C587.42 1048.092 605.609 1033.486 613.947 1008.096 C616.121 1001.475 616.769 994.353 618.145 987.324 C635.537 985.235 643.773 982.674 655.945 973.945 C673.843 961.11 683.913 943.592 683.924 921.395 C684.045 677.096 684.005 432.797 683.96 188.498 C683.959 184.385 683.56 180.244 683 176.163 C679.281 149.073 659.695 127.409 632.889 120.926 C627.506 119.624 621.924 119.145 616.263 118.259 C615.743 106.246 612.673 94.898 606.242 84.598 C593.381 63.998 574.69 52.259 550.521 52.178 C433.372 51.783 316.221 51.985 199.071 52.042 C192.958 52.045 186.798 52.289 180.739 53.048 C157.947 55.903 140.708 67.665 130.359 87.905 C125.447 97.514 123.518 108.648 120.074 119.613 C115.916 120.411 110.303 121.01 105.008 122.641 C99.7 124.276 94.421 126.447 89.63 129.241 C67.002 142.437 55.184 162.706 55.156 188.519 C54.894 431.151 54.993 673.784 55.05 916.416 C55.051 921.358 55.314 926.397 56.285 931.223 C59.49 947.166 66.484 961.038 79.179 971.747 C88.756 979.825 99.385 985.395 111.912 987.02 C115.34 987.465 119.765 986.747 121.912 988.635 C123.923 990.403 123.503 994.917 124.196 998.214 C124.365 999.018 124.792 999.769 124.943 1000.574 C130.73 1031.288 158.409 1054.584 190.006 1054.975 C202.502 1055.129 215.002 1055 228.5 1055 Z";

    return (
        <section className="relative bg-transparent px-5 pb-10 pt-8">
            {/* subtle background pattern overlay */}
            <div className="pointer-events-none absolute inset-0" />

            {/* Names header */}
            <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 mb-6 flex items-center justify-center gap-5 text-center"
            >
                <span className="font-serif text-sm tracking-[0.25em] text-gold-200 sm:text-base">
                    {groom.shortName.toUpperCase()}
                </span>

                <Image
                    src="/images/chu-hy.webp"
                    alt=""
                    width={140}
                    height={140}
                    className="w-[64px] md:w-[82px]"
                />

                <span className="font-serif text-sm tracking-[0.25em] text-gold-200 sm:text-base">
                    {bride.shortName.toUpperCase()}
                </span>
            </motion.div>

            {/* Framed couple photo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="relative z-10 mx-auto flex max-w-sm justify-center pt-8"
            >
                {/* Flying birds */}
                <div className="pointer-events-none absolute left-1/2 top-0 z-20 flex w-[min(96vw,420px)] -translate-x-1/2 items-start justify-between px-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/images/chim-en.webp"
                            alt=""
                            width={128}
                            height={80}
                            className="h-auto w-[92px] -rotate-12 scale-x-[-1] sm:w-[112px] md:w-[128px]"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/images/chim-en.webp"
                            alt=""
                            width={128}
                            height={80}
                            className="h-auto w-[92px] rotate-12 sm:w-[112px] md:w-[128px]"
                        />
                    </motion.div>
                </div>
                <div className="relative aspect-[754/1099] w-[min(82vw,340px)]">
                    <svg
                        viewBox="0 0 754 1099"
                        className="h-full w-full drop-shadow-[0_18px_32px_rgba(40,0,8,0.28)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <clipPath id="heroClip">
                                <path d={framePath} />
                            </clipPath>
                        </defs>

                        {/* Couple photo */}
                        <image
                            href="/images/VUQ_7612.jpg"
                            x="0"
                            y="0"
                            width="754"
                            height="1099"
                            clipPath="url(#heroClip)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                        <path
                            d={framePath}
                            fill="none"
                            stroke="#ffbe89"
                            strokeLinejoin="round"
                            strokeWidth="10"
                        />
                    </svg>
                </div>
            </motion.div>
        </section>
    );
}
