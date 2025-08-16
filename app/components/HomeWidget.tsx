import Image from "next/image";
import React from "react";
import { Header } from "./Header";

const HomeWidget = () => {
  return (
    <div className="relative w-full h-200">
      <Image src="/homeWidget.jpg" alt="home" fill />
      {/* Gradient Fade at Bottom */
      /*  fades into dark background*/}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0b23]" />
      <div className="relative z-10 h-170">
        <Header />
        <div className="flex flex-col ml-20 w-fit h-full justify-center text-white/60">
          <h1 className="uppercase text-8xl max-w-20 font-bold leading-30">
            Expansion Branding Agency
          </h1>
          <p className="tracking-widest text-purple-500">
            Creative Solutions That Drive Results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeWidget;
