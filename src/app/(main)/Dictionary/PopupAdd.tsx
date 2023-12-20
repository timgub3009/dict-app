"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import { IWord } from "./Dictionary";

import { isRussian, isEnglish } from "@/utils/validation";

type PopupAddProps = {
  onAdd: (values: IWord) => void;
};

const PopupAdd: React.FC<PopupAddProps> = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [values, setValues] = useState<IWord>({
    word: "",
    translation: "",
    id: "",
  });
  const sidebarRef = useRef<HTMLDivElement>(null);

  const generateId = (): string => {
    return (
      Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
    );
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!isEnglish(values.word)) {
      alert("English, motherfucker, English!");
      return;
    }
    if (!isRussian(values.translation)) {
      alert("Говори по-русски, свинья!");
      return;
    }
    onAdd(values);
    setValues({ word: "", translation: "", id: generateId() });
    setIsOpen(false);
  };

  const closeByEscape = useCallback((evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      setIsOpen(false);
      setValues({ word: "", translation: "", id: generateId() });
    }
  }, []);

  const closeOnOverlay = useCallback((evt: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(evt.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      document.addEventListener("mousedown", closeOnOverlay);

      return () => {
        document.removeEventListener("keydown", closeByEscape);
        document.removeEventListener("mousedown", closeOnOverlay);
      };
    }
  }, [isOpen, closeByEscape, closeOnOverlay]);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      <button
        onClick={toggleOpen}
        className="bg-yellow-300 p-3 rounded-full transition ease-out delay-100 opacity-100 hover:opacity-50"
      >
        Добавить слово или выражение
      </button>
      {isOpen && (
        <div
          className="fixed top-0 right-0 w-1/3 bg-slate-200"
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
              <button
                type="submit"
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
