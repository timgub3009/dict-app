"use client";

import Image from "next/image";
import React, { useState } from "react";
import useScroll from "@/hooks/useScroll";

export const Header = ({ toggleOpen, name, avatar }) => {
  const [logStatus, setLogStatus] = useState(true);
  const scrolled = useScroll(10);

  return (
    <header
      className={`h-20 max-w-screen-xl mx-auto flex items-center justify-between fixed z-[999] bg-slate-100 px-4 top-0 left-0 right-0 ${
        scrolled && "border-b-[1px]"
      }`}
    >
      <div className="flex gap-5 items-center justify-center">
        {avatar ? (
          <div
            className="rounded-full overflow-hidden bg-cover"
            onClick={toggleOpen}
          >
            <Image src={avatar} alt="pic" width={30} height={30} unoptimized />
          </div>
        ) : (
          <div
            className=" bg-cyan-600 rounded-full w-[30px] h-[30px]"
            onClick={toggleOpen}
          ></div>
        )}
        <div>{name}</div>
      </div>
      <div>{logStatus ? "Выйти" : "Войти"}</div>
    </header>
  );
};
