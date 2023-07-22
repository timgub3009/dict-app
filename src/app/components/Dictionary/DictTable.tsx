import React from "react";

const DictTable = () => {
  return (
    <ul className="dictionary__list mt-8 flex flex-col gap-2">
      <li className="bg-yellow-100 rounded-full p-3 text-center transition shadow-sm hover:shadow-lg cursor-pointer">
        Погода
      </li>
      <li className="bg-yellow-100 rounded-full p-3 text-center transition shadow-sm hover:shadow-lg cursor-pointer">
        Повседневное общение
      </li>
      <li className="bg-yellow-100 rounded-full p-3 text-center transition shadow-sm hover:shadow-lg cursor-pointer">
        Торговля
      </li>
      <li className="bg-yellow-100 rounded-full p-3 text-center transition shadow-sm hover:shadow-lg cursor-pointer">
        Логистика
      </li>
      <li className="bg-yellow-100 rounded-full p-3 text-center transition shadow-sm hover:shadow-lg cursor-pointer">
        Слэнг
      </li>
    </ul>
  );
};

export default DictTable;
