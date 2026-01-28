"use client"

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="z-[999] relative">
            <div className="fixed top-0 left-0 right-0 h-[5rem] w-full rounded-none 
            border border-gray-50 border-opacity-40 bg-gray-50 bg-opacity-40 shadow-lg shadow-black/[0.03]
            backdrop-blur-[0.5rem] sm:top-0 sm:h-[5rem] sm:rounded-none">
                <nav className="h-full flex items-center justify-center space-x-8">
                    <Link className="text-gray-600 hover:text-gray-900 transition duration-300" href="/experience">Experience</Link>
                    <Link className="text-gray-600 hover:text-gray-900 transition duration-300" href="/about">About</Link>
                    <Link className="text-gray-600 hover:text-gray-900 transition duration-300" href="/photography">Photography</Link>
                    <Link className="text-gray-600 hover:text-gray-900 transition duration-300" href="/resume">Resume</Link>
                </nav>
            </div>
        </header>
    )
}
