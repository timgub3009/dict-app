"use client";

import Image from "next/image";
import React, { useState } from "react";
import icon from "../../../../public/images/loop-svgrepo-com.svg";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleSubmit = () => {
    evt.preventDefault();
  };

  return (
    <div className="search w-1/4">
      <form action="" className="search__form flex items-center gap-2">
        <input
          type="text"
          className="search__input bg-slate-200 p-3 rounded-full w-full"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button type="submit">
          <Image src={icon} alt="иконка поиска" className=" w-8 h-8" />
        </button>
      </form>
    </div>
  );
};

export default Search;
