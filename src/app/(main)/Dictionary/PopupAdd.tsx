"use client";

import React, { useEffect, useRef, useState } from "react";

const PopupAdd = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [values, setValues] = useState({
    word: "",
    translation: "",
  });

  const sidebarRef = useRef();

  function handleChange(evt) {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAdd(values);
    setValues({ word: "", translation: "" });
    setIsOpen(false);
  }

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        setIsOpen(false);
        setValues({ word: "", translation: "" });
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);

      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    function closeOnOverlay(evt) {
      if (evt.target.contains(sidebarRef.current)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", closeOnOverlay);

      return () => {
        document.removeEventListener("mousedown", closeOnOverlay);
      };
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div>
      <button
        onClick={toggleOpen}
        className=" bg-yellow-300 p-3 rounded-full transition ease-out delay-100 opacity-100 hover:opacity-50"
      >
        Добавить слово или выражение
      </button>
      {isOpen && (
        <div
          className=" fixed top-0 right-0 w-1/3 bg-slate-200 "
          ref={sidebarRef}
        >
          <aside className="h-screen">
            <form
              action=""
              className="h-full flex flex-col items-center justify-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="word"
                id="word"
                placeholder="Введите слово или выражение"
                className="mb-5 p-5 text-center w-2/3"
                onChange={handleChange}
                value={values.word}
              />
              <input
                type="text"
                name="translation"
                id="translation"
                className="p-5 text-center w-2/3 mb-14"
                placeholder="Введите перевод на русский язык"
                onChange={handleChange}
                value={values.translation}
              />
              <button type="submit"
                className="bg-slate-400 p-3 text-center rounded-full shadow-sm transition delay-100 hover:shadow-slate-950"
              >
                Добавить
              </button>
            </form>
          </aside>
        </div>
      )}
    </div>
  );
};

export default PopupAdd;
