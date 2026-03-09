import React from "react";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
    return (
        <div className="max-w-2xl w-full">
            <div className="min-h-screen">
                <Navbar />
                <main className="pt-24 px-6 pb-16 fade-in">
                    <h1 className="heading-primary">Projects</h1>
                    <p className="body-text mt-4">placeholder for projects content.</p>
                </main>
            </div>
        </div>
    );
}