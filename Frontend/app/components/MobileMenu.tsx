"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BookCallButton from "./bookACall";
import SignInButton from "./SignInButton";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 z-40"
          onClick={onClose}
        />
      )}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-[#0e0b23] shadow-lg z-50 p-6 flex flex-col gap-6"
      >
        <button
          onClick={onClose}
          className="self-end text-gray-600 hover:text-black"
        >
          X
          {/*           <X size={24} />
           */}{" "}
        </button>

        <nav className="flex flex-col gap-4">
          <Link href="/" onClick={onClose} className="hover:text-purple-500">
            Home
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="hover:text-purple-500"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            onClick={onClose}
            className="hover:text-purple-500"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            onClick={onClose}
            className="hover:text-purple-500"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="hover:text-purple-500"
          >
            Contact
          </Link>
        </nav>
        <hr className="opacity-40" />
        <div className="flex flex-col items-center justify-center gap-2 ">
          <BookCallButton />
          <SignInButton />
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
