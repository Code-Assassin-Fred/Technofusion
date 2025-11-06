import React, { useState, useEffect } from "react";

export default function OverviewContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      image: "AI insurance Advisor.jpg",
      title: "AI Insurance Advisor",
      description: "Intelligent insurance recommendations powered by AI",
    },
    {
      image: "AI school.jpg",
      title: "AI School Platform",
      description: "Personalized learning experiences for students",
    },
    {
      image: "Spoofing detection.jpg",
      title: "Cybersecurity Spoofing Detection System (ML)",
      description: "Advanced security for fraud prevention (using AI and ML)",
    },
    {
      image: "insurance 2.jpg",
      title: "Insurance Analytics",
      description: "Data-driven insights for better coverage",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [projects.length]);

  // Track viewport to tailor layout for mobile without affecting desktop
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handle = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    // Initial
    handle(mq);
    // Listen for changes
    mq.addEventListener?.("change", handle as (e: MediaQueryListEvent) => void);
    // Fallback for older browsers
    // @ts-ignore - Safari < 14
    mq.addListener && mq.addListener(handle);
    return () => {
      mq.removeEventListener?.("change", handle as (e: MediaQueryListEvent) => void);
      // @ts-ignore - Safari < 14
      mq.removeListener && mq.removeListener(handle);
    };
  }, []);

  return (
  <div className="min-h-[540px] md:min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-8 px-3 md:py-12 md:px-4 mt-5 rounded-2xl md:rounded-3xl shadow-lg">

      <div className="max-w-7xl mx-auto text-center">

        {/* Carousel Section */}
        <div className="relative mt-2">
          <div className="relative h-[420px] md:h-[600px] bg-linear-to-br from-purple-100 to-blue-100 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden flex flex-col justify-center">
            
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-blue-300 rounded-full opacity-20 animate-pulse" />
            <div
              className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-purple-300 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            />

            {/* Slides */}
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              {projects.map((project, idx) => {
                const position =
                  (idx - currentSlide + projects.length) % projects.length;

                let translateX = 0;
                let opacity = 0;
                let scale = isMobile ? 1 : 0.9;
                let zIndex = 1;

                if (position === 0) {
                  translateX = 0;
                  opacity = 1;
                  scale = 1;
                  zIndex = 3;
                } else if (!isMobile && position === 1) {
                  translateX = 85;
                  opacity = 0.8;
                  zIndex = 2;
                } else if (!isMobile && position === projects.length - 1) {
                  translateX = -85;
                  opacity = 0.8;
                  zIndex = 2;
                } else {
                  opacity = 0;
                }

                return (
                  <div
                    key={idx}
                    className="absolute transition-all duration-700 ease-in-out w-[88vw] max-w-[360px] md:w-[800px] md:max-w-none"
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      opacity,
                      zIndex,
                    }}
                  >
                    {/* Image Card */}
                    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden border-[3px] border-slate-800 shadow-2xl transform hover:scale-105 transition-transform">
                    {/* Browser bar  */}
                    <div className="bg-slate-800 px-3 py-2 md:px-4 md:py-3 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                    </div>

                      
                      {/* Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[220px] md:h-[450px] object-contain bg-slate-900"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="mt-6 text-center">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto">
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === idx
                      ? "bg-blue-600 w-8"
                      : "bg-slate-400 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
