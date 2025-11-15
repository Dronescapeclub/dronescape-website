"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HoneycombProps {
    className?: string;
}

const HEX_SIZE = 13;
const OVERSIZE = 0;

const dx = HEX_SIZE * 1.5;
const dy = (Math.sqrt(3) / 2) * HEX_SIZE;

type Region = {
    label: string;
    cx: number;
    cy: number;
    href: string;
    highlighted?: boolean;
    subtext?: string;
};

function getHexPoints(cx: number, cy: number, size: number) {
    const s = size + OVERSIZE;
    return Array.from({ length: 6 }).map((_, i) => {
        const angle = (Math.PI / 180) * (60 * i);
        return {
            x: cx + s * Math.cos(angle),
            y: cy + s * Math.sin(angle),
        };
    });
}

export default function Honeycomb({ className }: HoneycombProps) {
    const regions: Region[] = [
        { label: "DRONESCAPE", cx: 50, cy: 50, href: "/", highlighted: true, subtext: "" },
        { label: "Members", cx: 50, cy: 50 - 2 * dy, href: "/members", subtext: "meet the team" },
        { label: "Join Us", cx: 50 + dx, cy: 50 - dy, href: "/join", subtext: "become a pilot" },
        { label: "Engineering", cx: 50 + dx, cy: 50 + dy, href: "/engineering", subtext: "projects & R&D" },
        { label: "Cinematics", cx: 50, cy: 50 + 2 * dy, href: "/cinematics", subtext: "videos & media" },
        { label: "Race Team", cx: 50 - dx, cy: 50 + dy, href: "/raceteam", subtext: "FPV & racing" },
        { label: "About Us", cx: 50 - dx, cy: 50 - dy, href: "/about", subtext: "mission & vision" },
    ];

    return (
        <div className={className ?? ""}>
            <svg
                viewBox="0 0 100 100"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
            >
                {regions.map((region) => {
                    const pts = getHexPoints(region.cx, region.cy, HEX_SIZE);
                    const ptsAttr = pts.map((p) => `${p.x},${p.y}`).join(" ");
                    const isCenter = region.highlighted;

                    return (
                        <Link href={region.href} key={region.label}>
                            <motion.g
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="cursor-pointer"
                            >
                                <polygon
                                    points={ptsAttr}
                                    className="fill-transparent stroke-red-600 stroke-5"
                                    vectorEffect="non-scaling-stroke"
                                    strokeWidth={isCenter ? 1.5 : 1}
                                />

                                <text
                                    x={region.cx}
                                    y={region.cy - (isCenter ? 0 : 1.0)}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="fill-red-600 select-none pointer-events-none"
                                    fontSize={isCenter ? "3.2" : "3.2"}      // REDUCED SIZE
                                >
                                    {region.label}
                                </text>

                                {/* Conditional subtext */}
                                {!isCenter && region.subtext && (
                                    <text
                                        x={region.cx}
                                        y={region.cy + 3.0}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className="fill-red-600 opacity-60 select-none pointer-events-none"
                                        fontSize="1.9"    // balanced at this scale
                                    >
                                        {region.subtext}
                                    </text>
                                )}
                            </motion.g>
                        </Link>
                    );
                })}
            </svg>
        </div>
    );
}
