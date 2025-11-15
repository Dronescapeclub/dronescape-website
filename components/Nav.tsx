"use client";

import Link from "next/link";

export default function DronescapeNav() {
    return (
        <header className="relative z-50 w-full bg-transparent">
            <nav className="flex w-full max-w-[1600px] mx-auto justify-between items-center px-10 py-6">

                {/* LEFT LOGO */}
                <div className="text-lg font-semibold whitespace-nowrap">
                    Dronescape DBHS
                </div>

                {/* RIGHT LINKS */}
                <div className="flex items-center gap-10 text-sm whitespace-nowrap">

                    {/* ACTIVE PAGE */}
                    <div className="relative text-white font-semibold select-none">
                        Home
                        <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-red-600 rounded-full"></div>
                    </div>

                    <Link className="hover:text-red-600 transition select-none" href="/cinematics">Cinematics</Link>
                    <Link className="hover:text-red-600 transition select-none" href="/engineering">Engineering</Link>
                    <Link className="hover:text-red-600 transition select-none" href="/raceteam">Raceteam</Link>
                    <Link className="hover:text-red-600 transition select-none" href="/about">About us</Link>
                </div>
            </nav>
        </header>
    );
}
