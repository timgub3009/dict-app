import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className=" block rounded-md focus:outline-none px-3 pt-5 pb-1 bg-neutral-500 w-full text-white peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className=" absolute text-neutral-400 duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
