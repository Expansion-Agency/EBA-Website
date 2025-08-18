import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex border-t border-white/30 rounded-t-[20%] flex-col pt-10 md:pt-30 pb-5 px-10">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
        <div className="flex flex-col md:ps-10 md:gap-10 gap-4 w-full">
          <Image
            src="/EBALogo.jpg"
            alt="logo"
            width="80"
            height="80"
            className="bg-transparent rounded-full md:ms-10 w-[50px] md:w-[80px] md:h-[80px]"
          />
          <div className="flex flex-col md:flex-row gap-2 md:gap-10">
            <div className="flex flex-col">
              <h3 className="font-semibold text-xs md:text-base md:mb-2">
                Phone Number
              </h3>
              <a
                href="tel:+2012345678"
                className="text-gray-700 text-xs md:text-base hover:text-purple-500"
              >
                +20 123 456 78
              </a>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-xs md:text-base md:mb-2">
                Email
              </h3>
              <a
                href="mailto:expansionbrandingagency@gmail.com"
                className="text-gray-700 text-xs md:text-base hover:text-purple-500"
              >
                expansionbrandingagency@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex items-start justify-around text-sm text-white/70">
          <div className="flex flex-col gap-5 justify-center">
            <h2 className="text-gray-700 font-semibold">Quick Links</h2>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <h2 className="text-gray-700 font-semibold">Services</h2>
            <Link href="/services">Web Development</Link>
            <Link href="/services">UI/Ux Design</Link>
            <Link href="/services">Graphic Design</Link>
            <Link href="/services">Digital Marketing</Link>
            <Link href="/services">Mobile App Development</Link>
            <Link href="/services">3D Design</Link>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <h2 className="text-gray-700 font-semibold">Legal</h2>
            <Link href="/services">Term of Services</Link>
            <Link href="/services">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <hr className="border border-white opacity-5 w-full mt-5 md:mt-15 mb-5 mx-auto" />
      <div className="flex justify-between md:mx-20">
        <p className="text-xs">Copyright 2025@EBA</p>
        <div className="flex items-center gap-2 md:gap-10 text-[15px]">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={15} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={15} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={15} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};
