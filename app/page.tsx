"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Services from "@/components/services";
import { ArrowRight } from "lucide-react";

// Reusable paragraph animation component
const AnimatedParagraph = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"], // animate as it enters/leaves view
  });

  const words = useMemo(() => text.split(" "), [text]);
  const totalWords = words.length;

  return (
    <p ref={ref} className="mb-4 leading-relaxed">
      {words.map((word, index) => {
        const start = index / totalWords;
        const end = start + 0.25;
        const color = useTransform(scrollYProgress, [start, end], [
          "#000000",
          "#ffffff",
        ]);
        return (
          <motion.span
            key={index}
            style={{ color }}
            className="inline transition-colors duration-300"
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </p>
  );
};

// Card component (unchanged)
const Card = ({
  step,
  hasConnector = false,
}: {
  step: { number: string; title: string; desc: string };
  hasConnector?: boolean;
}) => (
  <div className="relative flex flex-col items-center shrink-0 w-[280px]">
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Ensure we always start at the top on a hard refresh (avoid preserved scroll position)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  // Toggle steps every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const paragraphs = [
    "Technofusion is a premier technology hub based in Nairobi, Kenya, dedicated to delivering intelligent, data-driven, and automated solutions that empower organizations to operate smarter and more efficiently.",
    "We specialize in developing advanced digital systems, integrating artificial intelligence (AI) into everyday business operations, and creating intelligent platforms that drive innovation across multiple industries — from logistics and transport to finance, healthcare, manufacturing, and beyond.",
    "At Technofusion, we believe in AI for Everywhere — building intelligent solutions that enhance productivity, enable automation, and transform decision-making processes across all sectors.",
  ];

  const steps = [
    {
      number: "1",
      title: "Discover & Strategize",
      desc: "We begin by understanding your goals, challenges, and opportunities to craft a roadmap tailored to your business.",
    },
    {
      number: "2",
      title: "Design & Prototype",
      desc: "Our designers and engineers visualize your system — creating interactive mockups, data flows, and AI logic blueprints.",
    },
    {
      number: "3",
      title: "Build & Integrate",
      desc: "We develop, train, and integrate systems seamlessly into your existing operations.",
    },
    {
      number: "4",
      title: "Test & Optimize",
      desc: "We rigorously test, refine, and tune performance for real-world use — ensuring reliability, accuracy, and efficiency.",
    },
    {
      number: "5",
      title: "Deploy & Evolve",
      desc: "Launch, monitor, and continuously improve through updates and retraining — keeping your systems learning and adapting.",
    },
  ];

  const visibleSteps = offset === 0 ? steps.slice(0, 3) : steps.slice(2, 5);

  return (
    <main className="relative min-h-screen flex flex-col text-white bg-[#0d0d0d] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="relative grow flex flex-col items-center justify-center text-center px-6 py-15 max-w-6xl mx-auto mt-20 md:mt-28 scroll-mt-28">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          We build{" "}
          {/* Animated smart solutions with reveal + gentle float + underline */}
          <motion.span
            className="relative inline-block align-baseline"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
        <motion.span
          className="inline-block overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-linear-to-r from-[#ff5c00] via-[#ff3a00] to-[#ff6a00]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            >
              smart solutions
            </motion.span>
            {/* Curved underline drawing in */}
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              height="10"
              viewBox="0 0 600 10"
              fill="none"
            >
              <motion.path
                d="M5 5 C 150 18, 450 -8, 595 5"
                stroke="#ff6a00"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 1 }}
              />
            </motion.svg>
          </motion.span>{" "}
          that help businesses work better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-8 leading-relaxed"
        >
          At{" "}
          <span className="text-green-400 font-semibold">Technofusion</span>, we
          design intelligent software, automation tools, and AI-powered
          solutions that make organizations{" "}
          <span className="text-[#ff5c00] font-medium">faster</span>,{" "}
          <span className="text-[#ff5c00] font-medium">sharper</span>, and more{" "}
          <span className="text-[#ff5c00] font-medium">connected</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex w-full items-center justify-between gap-3 md:justify-center md:gap-6"
        >
          {/* Primary CTA */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex flex-1 min-w-0 justify-center text-center items-center gap-2 px-4 py-3 text-sm rounded-xl font-semibold text-black bg-[#00ff7f] md:flex-none md:px-8 md:py-4 md:text-base"
          >
            <span className="md:hidden">More</span>
            <span className="hidden md:inline">See what we build</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 hidden md:block" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex flex-1 min-w-0 justify-center text-center items-center gap-2 px-4 py-3 text-sm rounded-xl font-semibold border-2 border-[#00ff7f] text-white md:flex-none md:px-8 md:py-4 md:text-base"
          >
            <span className="flex items-center gap-2">Let's Talk</span>
          </motion.a>
        </motion.div>
      </div>

      {/* About Section with word-by-word animation */}
  <section id="about" className="relative p-2 max-w-7xl mx-auto text-lg md:text-xl leading-relaxed scroll-mt-28">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-[#ff5c00] via-[#ff3a00] to-[#ff6a00]"
        >
          About Technofusion
        </motion.h2>

        {paragraphs.map((p, idx) => (
          <AnimatedParagraph key={idx} text={p} />
        ))}
      </section>

      {/* Projects/Services anchor */}
      <section id="projects" className="relative scroll-mt-28">
        <Services />
      </section>

      {/* Process Section */}
      <section
        ref={containerRef}
        className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
      >
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ff5c00] via-[#ff3a00] to-[#ff6a00]"
          >
            Our Process, Explained
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg mt-4"
          >
            Here's our 5 step process to building products that need no
            introduction.
          </motion.p>
        </div>

        {/* Smooth 3-Card Carousel */}
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

      {/* Contact + Footer */}
  <section id="contact" className="relative py-10 px-6 md:px-12 bg-[#0d0d0d] text-white overflow-hidden scroll-mt-28">
        {/* Support navbar's #contact-me anchor too */}
        <span id="contact-me" className="absolute -top-24" aria-hidden="true" />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative text-center text-lg md:text-xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto"
        >
          <span className="text-gray-400">
            If you are seeing this website, you have already taken the first
            step to taking your brand beyond the ordinary.
          </span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="block h-0.5 mt-4 mx-auto bg-[#ff5c00] rounded-full shadow-[0_0_12px_#ff5c00]"
          />
        </motion.p>

        {/* Contact info + form */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-[#00ff7f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="text-[#00ff7f] text-2xl font-semibold">
                Leave something here
              </p>
            </motion.div>

            <div className="text-gray-300 space-y-2 mt-6">
              <p>📞 +254 768094564 &nbsp; | &nbsp; +254 731064012</p>
              <p>📧 fredjm40@gmail.com &nbsp; | &nbsp; alicengome2013@gmail.com</p>
              <p className="text-[#00ff7f] mt-2 font-medium">
                Better systems for a Smarter Future
              </p>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const formData = new FormData(form);
              const statusEl =
                form.querySelector<HTMLParagraphElement>("#form-status");
              if (!statusEl) return;
              statusEl.textContent = "Sending...";
              statusEl.className =
                "text-sm text-[#00ff7f] animate-pulse font-medium mt-2";
              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });
                const result = await response.json();
                if (result.success) {
                  statusEl.textContent = "Message sent successfully!";
                  statusEl.className =
                    "text-sm text-[#00ff7f] font-medium mt-2 transition-all";
                  form.reset();
                  setTimeout(() => {
                    statusEl.textContent = "";
                  }, 5000);
                } else {
                  statusEl.textContent = "Something went wrong. Please try again.";
                  statusEl.className = "text-sm text-red-500 font-medium mt-2";
                }
              } catch {
                statusEl.textContent = "Network error. Please check your connection.";
                statusEl.className = "text-sm text-red-500 font-medium mt-2";
              }
            }}
            className="w-full md:w-1/2 bg-[#141414] border border-[#222] rounded-2xl shadow-[0_0_35px_rgba(0,255,127,0.08)] p-10 space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="270e73cd-19bf-469a-b036-9df3ff999945"
            />

            <div>
              <label className="block mb-2 text-gray-400 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="w-full bg-transparent border border-gray-700 focus:border-[#00ff7f] rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full bg-transparent border border-gray-700 focus:border-[#00ff7f] rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400 font-medium">
                Your Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Share your idea, challenge, or vision..."
                required
                className="w-full bg-transparent border border-gray-700 focus:border-[#00ff7f] rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 outline-none transition-all"
              ></textarea>
            </div>

            <p id="form-status" className="text-sm mt-2 h-5"></p>

            <div className="flex justify-end pt-2">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(0,255,127,0.6)",
                  backgroundColor: "#00ff7f",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#00cc66] hover:bg-[#00ff7f] text-black font-semibold rounded-lg px-6 py-2 text-sm tracking-wide transition-all"
              >
                Send
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
