"use client";

import React from "react";

const Sidebar = () => {

  return (
    <aside className="h-screen">
      <form
        action=""
        className="h-full flex flex-col items-center justify-center"
      >
        <input
          type="text"
          placeholder="Введите слово или выражение"
          className="mb-5 p-5 text-center w-2/3"
        />
        <input
          type="text"
          className="p-5 text-center w-2/3 mb-14"
          placeholder="Введите перевод на русский язык"
        />
        <button
          onClick={() => {}}
          className="bg-slate-400 p-3 text-center rounded-full shadow-sm transition delay-100 hover:shadow-slate-950"
        >
          Добавить
        </button>
      </form>
    </aside>
  );
};

export default Sidebar;
