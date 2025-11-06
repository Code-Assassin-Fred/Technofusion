"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Services from "@/components/services";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0); // 0 = [1,2,3], 1 = [3,4,5]

  // Toggle every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const aboutHeadingColor = useTransform(
    scrollYProgress,
    [0.2, 0.35],
    ["#ff5c00", "#ff6a00"]
  );

  const paragraphs = [
    "Technofusion is a premier technology hub based in Nairobi, Kenya, dedicated to delivering intelligent, data-driven, and automated solutions that empower organizations to operate smarter and more efficiently.",
    "We specialize in developing advanced digital systems, integrating artificial intelligence (AI) into everyday business operations, and creating intelligent platforms that drive innovation across multiple industries — from logistics and transport to finance, healthcare, manufacturing, and beyond.",
    "At Technofusion, we believe in AI for Everywhere — building intelligent solutions that enhance productivity, enable automation, and transform decision-making processes across all sectors.",
  ];

  const steps = [
    {
      number: "1",
      title: "Discover & Strategize",
      desc: "We begin by understanding your goals, challenges, and opportunities to craft a data-driven roadmap tailored to your business.",
    },
    {
      number: "2",
      title: "Design & Prototype",
      desc: "Our designers and engineers visualize your system — creating interactive mockups, data flows, and AI logic blueprints.",
    },
    {
      number: "3",
      title: "Build & Integrate",
      desc: "We develop, train, and integrate intelligent systems seamlessly into your existing operations.",
    },
    {
      number: "4",
      title: "Test & Optimize",
      desc: "We rigorously test, refine, and tune performance for real-world use — ensuring reliability, accuracy, and efficiency.",
    },
    {
      number: "5",
      title: "Deploy & Evolve",
      desc: "We launch, monitor, and continuously improve through updates and retraining — keeping your systems learning and adapting.",
    },
  ];

  const renderAnimatedParagraph = (text: string) => {
    const words = useMemo(() => text.split(" "), [text]);
    const totalWords = words.length;

    return words.map((word, index) => {
      const start = 0.3 + (index / totalWords) * 0.5;
      const end = start + 0.2;
      const wordColor = useTransform(scrollYProgress, [start, end], [
        "#000000",
        "#ffffff",
      ]);
      return (
        <motion.span
          key={index}
          style={{ display: "inline-block", color: wordColor }}
          className="transition-colors duration-300"
        >
          {word}{" "}
        </motion.span>
      );
    });
  };

  // Compute current visible set
  const visibleSteps = offset === 0 ? steps.slice(0, 3) : steps.slice(2, 5);

  return (
    <main className="relative min-h-screen flex flex-col text-white bg-[#0d0d0d] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative grow flex flex-col items-center justify-center text-center px-6 py-15 max-w-6xl mx-auto mt-20 md:mt-28">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          We build{" "}
          <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c00] via-[#ff3a00] to-[#ff6a00]">
            smart systems
          </motion.span>{" "}
          that help businesses work better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
        >
          At{" "}
          <span className="text-green-400 font-semibold">Technofusion</span>, we design
          intelligent software, automation tools, and AI-powered solutions that make
          organizations{" "}
          <span className="text-[#ff5c00] font-medium">faster</span>,{" "}
          <span className="text-[#ff5c00] font-medium">sharper</span>, and more{" "}
          <span className="text-[#ff5c00] font-medium">connected</span>.
        </motion.p>
      </div>

      {/* About Section */}
      <motion.section className="relative p-2 max-w-7xl mx-auto text-lg md:text-xl leading-relaxed">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-[#ff5c00] via-[#ff3a00] to-[#ff6a00]"
          style={{ color: aboutHeadingColor }}
        >
          About Technofusion
        </motion.h2>

        {paragraphs.map((p, idx) => (
          <p key={idx} className="mb-4">
            {renderAnimatedParagraph(p)}
          </p>
        ))}
      </motion.section>

      <Services />

      {/* Our Process Section */}
      <section
        ref={containerRef}
        className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
      >
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c00] via-[#ff3a00] to-[#ff6a00]"
          >
            Our Process, Explained
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg mt-4"
          >
            Here's how we build intelligent systems that help businesses work better.
          </motion.p>
        </div>

        {/* Smooth, Balanced 3-Card Carousel */}
        <div className="relative flex justify-center items-center w-full h-[400px]">
          <div className="overflow-hidden w-full max-w-[940px]">
            <motion.div
              animate={{ x: offset === 0 ? "0px" : "-620px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="flex items-center gap-10"
            >
              {steps.map((step, i) => (
                <Card
                  key={step.number}
                  step={step}
                  hasConnector={i !== steps.length - 1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Card Component
const Card = ({
  step,
  hasConnector = false,
}: {
  step: { number: string; title: string; desc: string };
  hasConnector?: boolean;
}) => (
  <div className="relative flex flex-col items-center flex-shrink-0 w-[280px]">
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative bg-white text-black rounded-3xl border-[3px] border-[#ff5c00] shadow-[0_5px_25px_rgba(0,0,0,0.25)] w-full h-[340px] p-8 z-10"
    >
      <span className="text-5xl font-bold text-[#ff5c00] mb-3 block">
        {step.number}
      </span>
      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
    </motion.div>

    {hasConnector && (
      <svg
        className="absolute top-[170px] -right-[45px] w-20 h-12 z-0"
        viewBox="0 0 80 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 24 Q40 4, 75 24"
          stroke="#ff5c00"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    )}
  </div>
);