import React from "react";
import Navbar from "@/components/Navbar";

export default function ResumePage() {
  return (
    <div className="max-w-2xl w-full">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 px-6">
          <h1 className="text-3xl font-semibold text-gray-800">Resume</h1>
          <p className="mt-4 text-gray-600">Placeholder for resume content.</p>
        </main>
      </div>
    </div>
  );
}
