import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Image
        src="/EBALogo.jpg"
        alt="logo"
        width="70"
        height="70"
        className="bg-transparent rounded-full"
      />
      <div className="flex gap-20">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
      <div className="flex">
        <button className="rounded-l-full rounded-r-full w-30 h-15 text-sm bg-gradient-to-b from-blue-900/50 to-purple-900/50 cursor-pointer hover:from-blue-900 transform duration-300 transition ease-in-out">
          Book a Call
        </button>
      </div>
    </div>
  );
};
