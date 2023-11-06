import React from "react";

const Input = () => {
  return (
    <div className="relative">
      <input
      id="email"
        className=" block rounded-md focus:outline-none px-2 pt-4 pb-1 bg-neutral-500 w-full text-white"
        placeholder=" "
      />
      <label htmlFor="email"></label>
    </div>
  );
};

export default Input;
