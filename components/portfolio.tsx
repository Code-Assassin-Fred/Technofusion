"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Monitor, Smartphone } from "lucide-react";

const projects = [
    {
        title: "ARI.CO.KE",
        description: "A comprehensive digital transformation and platform development project focused on scalability and user experience. We delivered a high-performance system designed for modern enterprise needs.",
        tags: ["Digital Transformation", "Full Stack Development"],
        color: "#ff5c00"
    },
    {
        title: "NERATION.CO.KE",
        description: "Building modern digital identities and high-performance systems. Our work involved architectural design and cloud systems integration to ensure 99.9% uptime and rapid responses.",
        tags: ["System Architecture", "Cloud Integration"],
        color: "#00ff7f"
    },
    {
        title: "AI Education Platform",
        description: "Leading the future of EdTech with an intelligent platform that personalizes learning for students. Features include automated content generation and progress tracking tailored to the CBC curriculum.",
        tags: ["EdTech", "Artificial Intelligence", "CBC Curriculum"],
        color: "#00aaff"
    },
    {
        title: "AI Insurance Discovery",
        description: "An automated assistant that simplifies insurance discovery. We focused heavily on mobile styling and responsive UI/UX to ensure a seamless experience on all devices.",
        tags: ["FinTech", "AI Chatbot", "Mobile First Design"],
        color: "#ff3a00",
        hasMobileSpecialization: true
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="relative py-24 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-28">
            {/* Header */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-4"
                >
                    <div className="w-10 h-[2px] bg-[#ff5c00]" />
                    <span className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs">Selected Work</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Our <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff5c00] to-[#ff3a00]">Portfolio</span>
                </motion.h2>
            </div>

            {/* Projects List (Text Only, No Images, No Redirections) */}
            <div className="space-y-16 md:space-y-20">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative transition-colors duration-500"
                    >

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-[10px] font-bold uppercase tracking-tighter text-gray-500 border border-gray-800 px-3 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#ff5c00] transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                                {project.hasMobileSpecialization ? <Smartphone size={16} className="text-[#00ff7f]" /> : <Monitor size={16} className="text-gray-400" />}
                            </div>
                        </div>

                        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mb-4">
                            {project.description}
                        </p>

                        <div className="flex items-center gap-2 text-[#00ff7f]/60 font-medium text-sm">
                            <CheckCircle2 size={16} />
                            <span>Project Successfully Delivered</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Subtle Bottom Line */}
            <div className="mt-20 w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
