"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, Check } from "lucide-react";
import OverviewContainer from "./overview-container";

const services = [
  {
    title: "Software & Systems Development",
    summary:
      "We design and develop high-performance, scalable software solutions tailored to meet business and industry needs.",
    details: [
      "Custom web and mobile application development",
      "Enterprise Resource Planning (ERP) systems",
      "Customer Relationship Management (CRM) systems",
      "Cloud-based platforms and API integration",
      "Business process automation tools",
    ],
  },
  {
    title: "Artificial Intelligence (AI) & Machine Learning (ML)",
    summary:
      "Technofusion builds and trains intelligent models that help organizations make data-driven decisions and automate processes.",
    details: [
      "Predictive modeling and data forecasting",
      "Natural Language Processing (NLP) and AI agents",
      "Computer vision and image recognition systems",
      "Recommendation engines and personalization algorithms",
      "Model training using Linear Regression, K-Means, Random Forests, and XGBoost",
    ],
  },
  {
    title: "Data Science & Business Intelligence",
    summary:
      "We turn raw data into actionable insights through powerful analytics and visualization.",
    details: [
      "Data collection, cleaning, and warehousing",
      "Advanced analytics and visualization dashboards",
      "Big data architecture and management",
      "Real-time data monitoring and reporting",
      "Business intelligence solutions for strategic decision-making",
    ],
  },
  {
    title: "Automation & Intelligent Systems",
    summary:
      "We improve efficiency and reduce costs through automation and intelligent workflows.",
    details: [
      "Industrial and process automation",
      "Intelligent chatbots and virtual assistants",
      "Automated data entry and reporting systems",
      "Workflow orchestration and optimization",
    ],
  },
  {
    title: "AI Agents & Digital Transformation Solutions",
    summary:
      "We design and deploy AI-powered digital assistants and autonomous agents that transform the way organizations operate.",
    details: [
      "Customer service bots",
      "AI-driven decision-support systems",
      "Smart industry and IoT integrations",
      "Agent-based modelling and simulation",
    ],
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Autoslide every 5 seconds (unless paused)
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  const handleTagClick = (index: number) => {
    setCurrent(index);
    setPaused(true); // pause on manual interaction
  };

  return (
    <section className="w-full flex justify-center mt-8 relative">
      <div className="w-full bg-[#181715] rounded-t-3xl rounded-bl-[5rem] py-6 md:py-8 px-4 md:px-8 relative overflow-hidden">
        {/* === Section Title === */}
        <h1 className="text-3xl md:text-4xl font-light text-center">
          <span className="text-white font-normal">It's Simple:</span>{" "}
          <span className="text-orange-500 font-normal">Building</span>{" "}
          <span className="text-[#f5deb3]">for</span>
        </h1>

        <h2 className="text-3xl md:text-5xl text-center mt-1">
          <span className="text-white font-bold">Unlimited </span>
          <span className="text-orange-500">Possibilities</span>
        </h2>

        {/* === Overview Section === */}
        <OverviewContainer />

        {/* === Converging Service Tags Section === */}
        <div className="relative mt-8 md:mt-12">
          {/* On mobile, we only show the goal text; tags appear from md and up */}
          <div className="md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-8 max-w-[1000px] mx-auto px-3 py-3 md:py-6">
            {/* LEFT COLUMN - 3 Tags (hidden on mobile) */}
            <div className="hidden md:flex flex-col items-end gap-3 justify-self-end pr-4">
              {["Software & Systems", "AI & Machine Learning", "Data Science"].map(
                (tag, i) => (
                  <button
                    key={i}
                    onClick={() => handleTagClick(i)}
                    className={`service-tag text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md transition flex items-center gap-1.5 ${
                      current === i
                        ? "bg-linear-to-r from-orange-500 to-orange-400 text-white shadow-orange-500/30 scale-105"
                        : "bg-white text-[#181715] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg"
                    }`}
                  >
                    {i === 0 ? "💻" : i === 1 ? "🤖" : "📊"} {tag}
                  </button>
                )
              )}
            </div>

            {/* CENTER COLUMN - Goal Text */}
            <div className="max-w-[480px] mx-auto text-center text-white text-base md:text-sm leading-relaxed px-1">
              <h1>
                Our goal is clear — build great things with great people. If that's
                something we can do together, I'd love to chat.
              </h1>
            </div>

            {/* RIGHT COLUMN - 2 Tags (hidden on mobile) */}
            <div className="hidden md:flex flex-col items-start gap-3 justify-self-start pl-4">
              {["Automation Systems", "AI Integration"].map((tag, i) => (
                <button
                  key={i + 3}
                  onClick={() => handleTagClick(i + 3)}
                  className={`service-tag text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md transition flex items-center gap-1.5 ${
                    current === i + 3
                      ? "bg-linear-to-r from-orange-500 to-orange-400 text-white shadow-orange-500/30 scale-105"
                      : "bg-white text-[#181715] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg"
                  }`}
                >
                  {i === 0 ? "⚙️" : "🌐"} {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* === Core Services Carousel === */}
        <div id="services" className="mt-12 md:mt-20 max-w-6xl mx-auto px-4 scroll-mt-28">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#ff2f00]">
              What we actually build?
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-10 lg:gap-28">
            {/* LEFT COLUMN - Stacked Cards */}
            <div className="relative w-full md:w-2/5 h-[260px] md:h-[300px] flex justify-center items-center">
              {services.map((service, index) => {
                const isActive = index === current;
                const offset = (index - current + services.length) % services.length;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1.05 : 0.9,
                      rotate: isActive ? 0 : (offset - 2) * 5,
                      x: offset * 20,
                      zIndex: isActive ? 10 : 5 - offset,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className={`absolute bg-[#0a0a0a] border border-[#00ffaa]/10 rounded-2xl shadow-lg w-[250px] h-40 p-4 text-white flex flex-col justify-between ${
  isActive
    ? "shadow-[0_0_25px_#00ffaa80] shadow-[#00ffaa]/40 scale-105"
    : "opacity-60"
}`}

                  >
                    <h3 className="text-sm font-semibold text-[#00ffaa] drop-shadow-[0_0_10px_#00ffaa80]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-3">
                      {service.summary}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT COLUMN - Service Details */}
            <div className="w-full md:w-3/5 text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Title + Pause/Play moved here next to subtopic */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#00ffaa] drop-shadow-[0_0_10px_#00ffaa90]">
                      {services[current].title}
                    </h3>
                    <button
                      onClick={() => setPaused((p) => !p)}
                      className="p-2 rounded-full bg-[#222] hover:bg-[#333] border border-[#ff2f00]/40 transition shrink-0"
                      title={paused ? "Resume slideshow" : "Pause slideshow"}
                    >
                      {paused ? (
                        <Play size={16} className="text-[#ff2f00]" />
                      ) : (
                        <Pause size={16} className="text-[#ff2f00]" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-300 mb-4">{services[current].summary}</p>
                  <ul className="space-y-2 text-gray-300">
                    {services[current].details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-1 text-orange-500 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
