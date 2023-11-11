"use client";

interface card {
  word: string;
  translation: string;
}

import React, { useEffect, useState } from "react";
import Search from "./Search";
import PopupAdd from "./PopupAdd";
import Word from "./Word";

const Dictionary = () => {
  const [element, setElement] = useState([]);
  const [word, setWord] = useState();
  const [translation, setTranslation] = useState();

  const generateId = () => {
    return (
      Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
    );
  };

  const handleAddWord = ({ word, translation }: card) => {
    if (!word || !translation) {
      return;
    } else {
      setElement([
        {
          id: generateId(),
          word,
          translation,
        },
        ...element,
      ]);
    }
  };

  const handleDeleteWord = (id) => {
    const newArray = element.filter((e) => e.id !== id);
    setElement(newArray);
  };

  const handleUpdate = (values) => {
    setWord(values.word);
    setTranslation(values.translation);
  };

  return (
    <section className="dictionary max-w-screen-xl mx-auto py-8 pt-40 flex flex-col items-center w-full h-full">
      <div className=" flex items-center justify-between w-full">
        <Search />
        <PopupAdd onAdd={handleAddWord} />
      </div>
      <ul className="mt-8 grid grid-cols-4 w-full gap-5">
        {element.map((el) => (
          <Word
            key={el.id}
            id={el.id}
            word={el.word}
            translation={el.translation}
            onDelete={handleDeleteWord}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </section>
  );
};

export default Dictionary;
