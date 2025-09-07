import Image from "next/image";
import React from "react";
import { Header } from "./Header";

const HomeWidget = () => {
  return (
    <div className="relative w-full md:h-200">
      <Image src="/homeWidget.jpg" alt="home" fill />
      {/* Gradient Fade at Bottom */
      /*  fades into dark background*/}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0b23]" />
      <div className="relative z-10 md:h-170">
        <Header />
        <div className="flex flex-col ml-10 md:ml-20 w-fit h-full justify-center text-white/60">
          <h1 className="breathe-text masked-text uppercase text-2xl md:text-8xl max-w-350 font-bold md:leading-30">
            Expansion Branding Agency
          </h1>
          <p className="tracking-widest text-xs max-w-50 md:max-w-fit md:text-base text-purple-500">
            Creative Solutions That Drive Results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeWidget;
