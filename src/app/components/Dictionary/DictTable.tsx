import { prisma } from "@/db";
import React, { useState } from "react";
import Word from "./Word";

const DictTable = () => {
  return (
    <ul className="dictionary__list mt-8 grid grid-cols-4 w-full gap-5">
      <Word id={"1"} word={"Cookies"} translation={"Печенье"} />
    </ul>
  );
};

export default DictTable;
