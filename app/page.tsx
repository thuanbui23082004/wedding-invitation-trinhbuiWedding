"use client";

import { useState } from "react";
import Image from "next/image";
import HeroBanner from "@/app/components/HeroBanner";
import CoupleInfo from "@/app/components/CoupleInfo";
import Gallery from "@/app/components/Gallery";
import CountdownCalendar from "@/app/components/CountdownCalendar";
import DressCodeSchedule from "@/app/components/DressCodeSchedule";
import GuestbookForm from "@/app/components/GuestbookForm";
import RedEnvelope from "@/app/components/RedEnvelope";
import Footer from "@/app/components/Footer";
import MusicPlayer from "@/app/components/MusicPlayer";
import IntroCover from "@/app/components/IntroCover";
import AutoScrollWrapper from "@/app/components/AutoScrollWrapper";

export default function Home() {
    const [opened, setOpened] = useState(false);

    if (!opened) {
        return <IntroCover onOpen={() => setOpened(true)} />;
    }

    return (
        <AutoScrollWrapper>
            <main className="flex min-h-screen justify-center sm:py-8">
                <div className="relative w-full max-w-[480px] overflow-hidden bg-wine shadow-2xl shadow-black/50 sm:rounded-3xl">
                    {/* Background rồng phượng lặp */}
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-45 mix-blend-multiply">
                        <div className="absolute left-1/2 top-0 flex min-h-full w-full -translate-x-1/2 flex-col items-center gap-3 py-2">
                            {[
                                "/images/rong.webp",
                                "/images/phung.webp",
                                "/images/rong.webp",
                                "/images/phung.webp",
                                "/images/rong.webp",
                                "/images/phung.webp",
                                "/images/rong.webp",
                                "/images/phung.webp",
                            ].map((src, index) => (
                                <Image
                                    key={`${src}-${index}`}
                                    src={src}
                                    alt=""
                                    width={720}
                                    height={720}
                                    className="w-[118vw] max-w-[620px] opacity-45"
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10">
                        <HeroBanner />
                        <CoupleInfo />
                        <Gallery />
                        <CountdownCalendar />
                        <DressCodeSchedule />
                        <GuestbookForm />
                        <RedEnvelope />
                        <Footer />
                        <MusicPlayer />
                    </div>
                </div>
            </main>
        </AutoScrollWrapper>
    );
}
