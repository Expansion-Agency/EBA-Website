// MenuButton.tsx (client)
"use client";

import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RiMenu3Fill
        className="md:hidden cursor-pointer"
        size={20}
        onClick={() => setOpen(!open)}
      />
      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default MenuButton;
