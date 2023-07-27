"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";

const PopupAdd = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div>
      <button
        onClick={toggleOpen}
        className=" bg-yellow-300 p-3 rounded-full transition ease-out delay-100 opacity-100 hover:opacity-50"
      >
        Добавить слово или выражение
      </button>
      {isOpen && (
        <div className=" fixed top-0 right-0 w-1/3 bg-slate-200 ">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default PopupAdd;
