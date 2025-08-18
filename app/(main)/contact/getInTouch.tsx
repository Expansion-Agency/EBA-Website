"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function GetInTouch() {
  const elevatorLRef = useRef<HTMLDivElement | null>(null);
  const elevatorRRef = useRef<HTMLDivElement | null>(null);
  const socialRef = useRef<HTMLDivElement | null>(null);

  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.9; // trigger around middle
      const scrolled = window.scrollY;
      const progress = scrolled / triggerHeight;
      const multiplier = window.innerWidth < 768 ? 0.7 : 0.5;
      const distance = window.innerWidth * multiplier;

      if (elevatorLRef.current) {
        elevatorLRef.current.style.transform = `translateX(${
          Math.min(progress, 1) * -distance
        }px)`;
      }
      if (elevatorRRef.current) {
        elevatorRRef.current.style.transform = `translateX(${
          Math.min(progress, 1) * distance
        }px)`;
      }
      const triggerPoint = 0.3; // show socials when 75% of animation is done

      // 👇 Show socials when animation is almost done
      if (progress >= triggerPoint) {
        setShowSocial(true);
      } else {
        setShowSocial(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative md:min-h-[100vh] bg-gradient-to-b from-blue-800/20 to-purple-950/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0b23] pointer-events-none" />

      <div className="sticky top-[20%] md:top-[40%] overflow-hidden pointer-events-none">
        <div className="flex items-center justify-center gap-10 text-[6vw] font-bold whitespace-nowrap">
          <div ref={elevatorLRef}>GET ON</div>
          <div ref={elevatorRRef}>Touch</div>
        </div>
      </div>

      {/* 👇 Socials appear only when animation is done */}
      <div
        ref={socialRef}
        className={`flex flex-col z-20 gap-2 md:gap-5 mt-[30vh] md:mt-[50vh] p-16 text-center items-center text-2xl text-white/70 max-w-2xl mx-auto transition-opacity duration-700 ${
          showSocial ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <h1 className="md:text-5xl font-bold">Follow Us</h1>
        <div className="flex justify-around items-center gap-3 md:gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-[20px] md:text-[50px]" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[20px] md:text-[50px]" />
          </a>

          <span className="md:mx-6 md:text-[40px] font-light">|</span>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-[20px] md:text-[50px]" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-[20px] md:text-[50px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
