import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookCallButton from "./bookACall";

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
      <BookCallButton />
    </div>
  );
};
