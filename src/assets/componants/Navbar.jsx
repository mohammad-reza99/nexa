import React from "react";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <IoMenuOutline className="w-5" />
    </div>
  );
};

export default Navbar;
