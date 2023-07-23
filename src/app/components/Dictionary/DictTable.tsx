import { prisma } from "@/db";
import React from "react";

const DictTable = () => {

// const words = await prisma.newWord.findMany()

  return (
    <ul className="dictionary__list mt-8 grid grid-cols-4 w-full gap-5">
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        Some English word or a phrase or whatever else
      </li>
    </ul>
  );
};

export default DictTable;
