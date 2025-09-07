import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookCallButton from "./bookACall";
import { IoNotifications } from "react-icons/io5";
import SignInButton from "./SignInButton";
import MenuButton from "./MenuButton";

export const Header = () => {
  return (
    <div className="flex justify-between items-center md:px-6 py-3 bg-black/10 rounded-full m-2">
      <Image
        src="/EBALogo.jpg"
        alt="logo"
        width="60"
        height="60"
        className="bg-transparent rounded-full w-[40px] md:w-[60px]"
      />
      <div className="hidden md:flex gap-20">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2">
          <BookCallButton />
          <SignInButton />
        </div>
        <IoNotifications size={20} />
        <MenuButton />
      </div>
    </div>
  );
};
