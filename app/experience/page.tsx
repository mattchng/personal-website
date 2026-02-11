import React from "react";
import Navbar from "@/components/Navbar";

export default function ExperiencePage() {
  return (
    <div className="max-w-2xl w-full">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 px-6 pb-16">
          <h1 className="text-3xl font-normal text-gray-700 mb-12 tracking-tight">Experience</h1>

          {/* WORK SECTION */}
          <section className="mb-16">
            <h2 className="text-lg font-normal text-gray-700 mb-8 tracking-widest">WORK</h2>
            <div className="space-y-9">
              {/* Work Entry 1 */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Built internal business analysis tools at{" "}
                  <span className="text-gray-600 font-medium">Johnson & Johnson</span>
                </p>
                <p className="text-gray-500 text-sm mt-2">May 2025 – Aug 2025</p>
              </div>

              {/* Work Entry 2 */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Resolved software and hardware issues for faculty at {" "}
                  <span className="text-gray-600 font-medium">NYU Tisch</span>
                </p>
                <p className="text-gray-500 text-sm mt-2">July 2024 – Dec 2024</p>
              </div>

              {/* Work Entry 3 */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Strategized and created marketing campaigns at {" "}
                  <span className="text-gray-600 font-medium">MLVentures</span>
                </p>
                <p className="text-gray-500 text-sm mt-2">Jun 2023 – Aug 2023</p>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section className="mb-16">
            <h2 className="text-lg font-normal text-gray-700 mb-8 tracking-widest">PROJECTS</h2>
            <div className="space-y-10">
              {/* Project 1 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-700 font-medium">Maps Routing Project</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Work in Progress
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-700 font-medium">Orbit - AI Interview Prep Assistant</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Next.js, FastAPI, Python, Google Gemini, LiveKit
                  </p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="https://orbit-mmos8.ondigitalocean.app/" className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                    live
                  </a>
                  <a href="https://github.com/axie22/Orbit" className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                    github
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-700 font-medium">PR analysis Github App</p>
                  <p className="text-gray-500 text-sm mt-2">
                    TypeScript, React, Playwright, Google Gemini
                  </p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="https://aura-aolmw.ondigitalocean.app/" className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                    live
                  </a>
                  <a href="https://github.com/axie22/Aura" className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                    github
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-700 font-medium">Marketing GenAI - ML Model</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Python, PyTorch, SciKitLearn, Pandas
                  </p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="https://github.com/jia-q1/TrustworthyLab_GES_Hackathon" className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                    github
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* LEADERSHIP SECTION */}
          <section className="mb-16">
            <h2 className="text-lg font-normal text-gray-700 mb-8 tracking-widest">LEADERSHIP</h2>
            <div className="space-y-8">
              {/* Leadership Entry 1 */}
              <div>
                <p className="text-gray-700 font-medium">NYU Asian Cultural Union</p>
                <p className="text-gray-500 text-sm mt-2">Vice President of Events, Graphics Lead</p>
              </div>
              {/* Leadership Entry 2 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-700 font-medium">Tech@NYU TechTreks - Spocial</p>
                  <p className="text-gray-500 text-sm mt-2">Product Manager</p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="https://drive.google.com/drive/u/2/folders/1MP7ndfQHxM3BjPeGe9zSXEq2DNLV5b0D" className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                    figma
                  </a>
                  <a href="https://github.com/Spocial/Spocial" className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                    github
                  </a>
                </div>
              </div>            </div>
          </section>

          {/* HACKATHONS SECTION */}
          <section className="mb-16">
            <h2 className="text-lg font-normal text-gray-700 mb-8 tracking-widest">HACKATHONS</h2>
            <div className="space-y-8">
              {/* Hackathon 1 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-700 font-medium">Marketing GenAI</p>
                  <p className="text-gray-500 text-sm mt-2">#3 @ GES UCLA Hackathon</p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="https://docs.google.com/presentation/d/1w_egcLTpV4xsWPrweq3rg8LH0nVrfPZ-32UfI5d9zoA/edit?usp=sharing" className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                    slides
                  </a>
                  <a href="https://dorahacks.io/hackathon/trustworthy-ai-gesucla/round-1-result-(top-5)" className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                    dorahacks
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
