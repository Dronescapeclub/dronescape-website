"use client";

import Honeycomb from "@/components/Honeycomb";
import {motion} from "framer-motion";
import {ChevronDown} from "lucide-react";

export default function Home() {
    return (
        <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">

            {/* ====== RED BANNER #1 (TOP) ====== */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-20">
                <div className="whitespace-nowrap text-red-600 font-black text-[4rem] tracking-tight animate-marquee">
                    DRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPE
                </div>
            </div>

            {/* ====== RED BANNER #2 (BOTTOM) ====== */}
            <div className="absolute bottom-40 left-0 w-full overflow-hidden pointer-events-none opacity-20">
                <div
                    className="whitespace-nowrap text-red-600 font-black text-[4rem] tracking-tight animate-marquee-reverse">
                    DRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPE
                </div>
            </div>

            {/* ====== NAVBAR (like your screenshot) ====== */}
            <nav className="z-30 relative flex justify-between items-center px-10 py-6">
                <div className="text-lg font-semibold">Dronescape DBHS</div>

                <div className="flex items-center gap-10 text-sm">
                    <div className="relative text-white font-semibold">
                        Home
                        <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-red-600 rounded-full"></div>
                    </div>
                    <button className="hover:text-red-600 transition">Cinematics</button>
                    <button className="hover:text-red-600 transition">Engineering</button>
                    <button className="hover:text-red-600 transition">Raceteam</button>
                    <button className="hover:text-red-600 transition">About us</button>
                </div>
            </nav>

            {/* ====== MAIN CONTENT (SIDE-BY-SIDE) ====== */}
            <div className="relative z-20 flex items-center justify-center w-full px-20 h-[calc(100vh-80px)]">

            {/* ==== LEFT HERO TEXT ===== */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
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

                {/* ==== RIGHT HONEYCOMB ===== */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="scale-110"
                >
                    <Honeycomb className="w-200"/>
                </motion.div>

            </div>
            {/* ====== CENTER BOTTOM CHEVRON ====== */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown size={56} className="opacity-70" />
            </motion.div>

        </main>
    );
}
