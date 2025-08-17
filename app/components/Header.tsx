import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookCallButton from "./bookACall";
import { IoNotifications } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-black/10 rounded-full m-2">
      <Image
        src="/EBALogo.jpg"
        alt="logo"
        width="60"
        height="60"
        className="bg-transparent rounded-full"
      />
      <div className="flex gap-20">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
      <div className="flex items-center gap-2">
        <BookCallButton />
        <button className="rounded-l-full rounded-r-full w-26 h-13 text-sm bg-gradient-to-b from-red-900/50 to-purple-900/50 cursor-pointer hover:from-red-900 transform duration-300 transition ease-in-out">
          Sign in
        </button>
        <IoNotifications size={20} />
      </div>
    </div>
  );
};
