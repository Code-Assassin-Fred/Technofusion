"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      "We help businesses improve efficiency and reduce costs through automation and intelligent workflows.",
    details: [
      "Robotic Process Automation (RPA)",
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

  // Autoslide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center mt-8 relative">
      <div className="w-full bg-[#181715] rounded-t-3xl py-8 px-4 md:px-8 relative overflow-hidden">
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
        <div className="relative mt-12">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8 max-w-[1000px] mx-auto px-3 py-6">
            {/* LEFT COLUMN - 3 Tags */}
            <div className="flex flex-col items-end gap-3 justify-self-end pr-4">
              <div className="service-tag bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                💻 Software & Systems
              </div>
              <div className="service-tag bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                🤖 AI & Machine Learning
              </div>
              <div className="service-tag bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                📊 Data Science
              </div>
            </div>

            {/* CENTER COLUMN - Goal Text */}
            <div className="max-w-[400px] text-center text-white text-sm leading-relaxed">
              <h1>
                Our goal is clear — build great things with great people. If that's
                something we can do together, I'd love to chat.
              </h1>
            </div>

            {/* RIGHT COLUMN - 2 Tags */}
            <div className="flex flex-col items-start gap-3 justify-self-start pl-4">
              <div className="service-tag bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                ⚙️ Automation Systems
              </div>
              <div className="service-tag bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                🌐 AI Integration
              </div>
            </div>
          </div>
        </div>

        {/* === Core Services Carousel === */}
        <div className="mt-20 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#00ffcc] mb-12">
            Our Core Services
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:gap-24 gap-10">
            {/* LEFT COLUMN - Stacked Cards */}
            <div className="relative w-full md:w-2/5 h-[300px] flex justify-center items-center">
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
                      rotate: isActive ? 0 : (offset - 2) * 3,
                      x: offset * 20,
                      zIndex: isActive ? 10 : 5 - offset,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className={`absolute bg-[#101010] border border-[#00ffcc]/20 rounded-2xl shadow-lg w-[250px] h-[160px] p-4 text-white flex flex-col justify-between ${
                      isActive ? "shadow-[#00ffcc]/40 shadow-xl" : "opacity-70"
                    }`}
                  >
                    <h3 className="text-sm font-semibold text-[#00ffcc]">
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
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#00ffcc] mb-4">
                    {services[current].title}
                  </h3>
                  <p className="text-gray-300 mb-4">{services[current].summary}</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {services[current].details.map((detail, i) => (
                      <li key={i}>{detail}</li>
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
