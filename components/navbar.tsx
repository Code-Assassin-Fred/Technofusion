"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Ensure initial state matches current scroll position (prevents transparent flash)
    if (typeof window !== "undefined") {
      const current = window.scrollY || 0;
      setScrolled(current > 50);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // Add background blur when scrolled
      setScrolled(currentScrollY > 50);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-20 py-6 
          transition-all duration-500 ${scrolled
            ? "bg-[#0d0d0d]/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.35)] border-b border-white/5"
            : "bg-[#0d0d0d] border-b border-white/5"
          } ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        {/* Brand */}
        <a href="#home" className="text-xl md:text-4xl font-bold tracking-widest text-[#ffdca8] hover:font-extrabold transition-none cursor-pointer">
          Solvix
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center justify-center space-x-8 md:space-x-16 text-lg md:text-xl font-light">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[#ffdca8] hover:font-medium transition-none"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (no circle) */}
        <button
          className="md:hidden text-[#ffdca8] text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className={`fixed top-20 left-0 w-full bg-black/90 backdrop-blur-md text-center text-lg font-light text-[#ffdca8] py-6 space-y-6 md:hidden transition-all duration-500 z-9999 ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block hover:font-medium transition-none"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
