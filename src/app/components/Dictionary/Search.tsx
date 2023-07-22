import Image from "next/image";
import React from "react";
import icon from '../../../../public/images/loop-svgrepo-com.svg';

const Search = () => {
  return (
    <div className="search w-1/2">
      <form action="" className="search__form flex items-center gap-2">
        <input type="text" className="search__input bg-slate-200 p-3 rounded-full w-full" />
        <Image src={icon} alt="иконка поиска" className=" w-8 h-8" />
      </form>
    </div>
  );
};

export default Search;
