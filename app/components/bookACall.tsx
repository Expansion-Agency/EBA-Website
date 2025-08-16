"use client";
import React, { useState } from "react";

export default function BookCallButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-l-full rounded-r-full w-35 h-15 text-sm bg-gradient-to-b from-blue-900/50 to-purple-900/50 cursor-pointer hover:from-blue-900 transform duration-300 transition ease-in-out"
      >
        Book a Call
      </button>

      {open && (
        <div className="absolute mt-2 w-fit text-xs shadow-lg rounded-xl overflow-hidden">
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 hover:bg-gray-100/10"
          >
            📅 Schedule via Tool
          </a>
          <a
            href="tel:+2012345678"
            className="block px-4 py-2 hover:bg-gray-100/10"
          >
            📞 Call Directly
          </a>
        </div>
      )}
    </div>
  );
}
