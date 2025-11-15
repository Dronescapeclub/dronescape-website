"use client";

import Honeycomb from "@/components/Honeycomb";
import DronescapeNav from "@/components/Nav";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Home() {
    return (
        <main className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">

            {/* NAV */}
            <DronescapeNav />

            {/* HERO — SAME HEIGHT AS BEFORE, CHEVRON ANCHORED TO HERO BOTTOM */}
            <section className="relative z-20 flex items-center justify-center w-full px-20 h-[calc(100vh-80px)] gap-20">

                {/* BANNERS */}
                <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-20">
                    <div className="whitespace-nowrap text-red-600 font-black text-[4rem] tracking-tight animate-marquee">
                        DRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPE
                    </div>
                </div>

                <div className="absolute bottom-40 left-0 w-full overflow-hidden pointer-events-none opacity-20">
                    <div className="whitespace-nowrap text-red-600 font-black text-[4rem] tracking-tight animate-marquee-reverse">
                        DRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPE
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col"
                >
                    <div className="flex flex-col mb-8">
                        <div className="text-6xl font-black leading-none">Dronescape</div>
                        <div className="text-5xl font-black leading-none text-red-600">
                            DBHS
                        </div>
                    </div>

                    <div className="text-3xl font-bold space-y-1">
                        <div>Where Dreams</div>
                        <div>Take Off</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="scale-110"
                >
                    <Honeycomb className="w-200" />
                </motion.div>

                {/* CHEVRON AT BOTTOM OF HERO, NOT PAGE */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={56} className="opacity-70" />
                </motion.div>
            </section>

            {/* SECTION 2: RANDOM CONTENT */}
            <section className="relative z-20 w-full px-20 py-40 border-t border-white/10">
                <div className="text-5xl font-black mb-10">Our Mission</div>

                <p className="text-xl max-w-3xl leading-relaxed opacity-80">
                    We build autonomous aerial systems, cinematic rigs, and race drones.
                    From CAD to flight testing, members work across engineering, media,
                    and operations to push what student teams can do with drones.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-6 border border-white/10 rounded-xl text-lg opacity-80">
                        • Autonomous flight & path planning
                    </div>
                    <div className="p-6 border border-white/10 rounded-xl text-lg opacity-80">
                        • FPV, cinematics, and media production
                    </div>
                    <div className="p-6 border border-white/10 rounded-xl text-lg opacity-80">
                        • Manufacturing, CAD, and reliability
                    </div>
                </div>
            </section>

            {/* SECTION 3: FILLER / TODO */}
            <section className="relative z-20 w-full px-20 py-40 border-t border-white/10">
                <div className="text-5xl font-black mb-6">What We&apos;re Building Next</div>
                <div className="text-xl opacity-70 max-w-2xl">
                    Live race telemetry, chase drones, long-range mapping platforms,
                    and more. This section is placeholder copy you can replace with
                    upcoming projects, events, or recruitment info.
                </div>
            </section>
        </main>
    );
}
