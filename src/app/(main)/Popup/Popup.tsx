import React, { useEffect, useRef, useState } from "react";

interface iValues {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const Popup = ({ innerRef, onSave, setPopup }) => {
  const [inputValue, setInputValue] = useState<iValues>({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    onSave(inputValue);
    setPopup(false);
  };

  return (
    <section
      className=" top-0 left-0 h-full w-full fixed justify-center items-center flex"
      ref={innerRef}
    >
      <div className=" bg-slate-500 max-w-full max-h-full">
        <form
          className="flex flex-col gap-5 p-10 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className=" p-3 rounded-md"
            type="text"
            name="name"
            id=""
            placeholder="Введите своё имя"
            value={inputValue.name}
            onChange={handleChange}
          />
          <input
            className=" p-3 rounded-md"
            type="email"
            name="email"
            id=""
            placeholder="Введите свою почту"
            value={inputValue.email}
            onChange={handleChange}
          />
          <input
            className=" p-3 rounded-md"
            type="password"
            name=""
            id=""
            placeholder="Введите свой пароль"
          />
          <input
            className=" p-3 rounded-md"
            type="url"
            name="avatar"
            id="avatar"
            value={inputValue.avatar}
            placeholder="Введите url аватарки"
            onChange={handleChange}
          />
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </section>
  );
};

export default Popup;
