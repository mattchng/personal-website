"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const tabs = [
        { href: "/experience", label: "Experience" },
        { href: "/about", label: "About" },
        { href: "/photography", label: "Photography" },
        { href: "/resume", label: "Resume" },
    ];
    return (
        <header className="z-[999] relative">
            <div className="fixed top-0 left-0 right-0 h-[4.5rem] w-full rounded-none border-b border-gray-200 border-opacity-40 bg-white/80 shadow-sm backdrop-blur-md sm:top-0 sm:h-[4.5rem] flex items-center justify-between px-12">
                <div className="text-lg font-medium tracking-wide text-gray-700">
                    Matthew Cheng
                </div>
                <nav className="h-full flex space-x-1">
                    {tabs.map((t) => {
                        const active = pathname === t.href;
                        return (
                            <div key={t.href} className="relative h-full">
                                <Link
                                    href={t.href}
                                    className={`flex items-center justify-center h-full px-6 text-sm font-medium tracking-wide transition-all duration-300 ${active ? "bg-gray-100 text-black" : "text-gray-500 hover:text-black hover:bg-gray-50"}`}
                                >
                                    {t.label}
                                </Link>
                                <AnimatePresence mode="wait">
                                    {active && (
                                        <motion.div
                                            key="underline"
                                            initial={{ scaleX: 0, opacity: 0 }}
                                            animate={{ scaleX: 1, opacity: 1 }}
                                            exit={{ scaleX: 0, opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            style={{ transformOrigin: "center" }}
                                            className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#f3ff2b] shadow-[0_-2px_10px_rgba(243,255,43,0.5)]"
                                        />
                                    )}
                                </AnimatePresence>
                                {active && (
                                    <motion.div
                                        layoutId="glow"
                                        className="absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-[#f3ff2b]/20 to-transparent pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
        </header>
    )
}
