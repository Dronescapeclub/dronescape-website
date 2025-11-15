"use client";

import Link from "next/link";
import DronescapeNav from "@/components/Nav";

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-hidden">

            {/* NAV ALWAYS AT TOP */}
            <DronescapeNav />

            {/* Background marquee */}
            <div className="absolute top-1/3 left-0 w-full overflow-hidden pointer-events-none opacity-15">
                <div className="whitespace-nowrap text-red-600 font-black text-[6rem] tracking-tight animate-marquee">
                    DRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPEDRONESCAPE
                </div>
            </div>

            {/* CENTERED CONTENT */}
            <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">

                {/* 404 Hexagon */}
                <div className="relative">
                    <svg
                        width="260"
                        height="300"
                        viewBox="0 0 260 300"
                        className="drop-shadow-[0_0_10px_#ff0000]"
                    >
                        <polygon
                            points="130,10 240,75 240,195 130,260 20,195 20,75"
                            className="fill-transparent stroke-red-600"
                            strokeWidth="4"
                        />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-[4rem] font-black">404</div>
                        <div className="text-red-600 text-lg mt-2">Page Not Found</div>
                    </div>
                </div>

                <div className="mt-10 text-center text-lg">
                    This page does not exist.
                </div>

                <Link
                    href="/"
                    className="mt-4 text-red-600 font-semibold hover:underline"
                >
                    Return Home →
                </Link>
            </div>
        </main>
    );
}
