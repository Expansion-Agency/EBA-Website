"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./getInTouch.module.css";
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

      const distance = window.innerWidth * 0.3;

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
    <section className="relative min-h-[100vh] bg-gradient-to-b from-blue-800/20 to-purple-950/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0b23]" />

      <div className="sticky top-[40%] overflow-hidden">
        <div className="flex justify-around text-[6vw] font-bold whitespace-nowrap">
          <div ref={elevatorLRef} className={styles.elevatorL}>
            GET ON
          </div>
          <div ref={elevatorRRef} className={styles.elevatorR}>
            Touch
          </div>
        </div>
      </div>

      {/* 👇 Socials appear only when animation is done */}
      <div
        ref={socialRef}
        className={`flex flex-col gap-5 mt-[50vh] p-16 text-center items-center text-2xl text-white/70 max-w-2xl mx-auto transition-opacity duration-700 ${
          showSocial ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <h1 className="text-5xl font-bold">Follow Us</h1>
        <div className="flex justify-around items-center gap-6 text-[40px]">
          <FaFacebook size={50} />
          <FaInstagram size={50} />
          <span className="text-[50px]">|</span>
          <FaTwitter size={50} />
          <FaLinkedinIn size={50} />
        </div>
      </div>
    </section>
  );
}
