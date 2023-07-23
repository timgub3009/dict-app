'use client';

import React from "react";
import Search from "./Search";
import DictTable from "./DictTable";
import PopupAdd from "./PopupAdd";

const Dictionary = () => {
  return (
    <section className="dictionary max-w-screen-xl mx-auto py-8 flex flex-col items-center">
      <div className=" flex items-center justify-between w-full">
      <Search />
      <PopupAdd />
      </div>
      <DictTable />
    </section>
  );
};

export default Dictionary;
