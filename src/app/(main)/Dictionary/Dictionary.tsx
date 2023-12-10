"use client";

import React, { useEffect, useState } from "react";
import Search from "./Search";
import PopupAdd from "./PopupAdd";
import Word from "./Word";
import axios from "axios";

export interface iWord {
  id: string;
  word: string;
  translation: string;
}

const Dictionary = (): JSX.Element => {
  const [element, setElement] = useState<iWord[]>([]);
  const [word, setWord] = useState<string>("");
  const [translation, setTranslation] = useState<string>("");

  const fetchData = async (): Promise<void> => {
    try {
      const response = await axios.get("/api/cards");
      if (response.data.length === 0) {
        return;
      }
      setElement(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(element);

  const save = async ({ word, translation }: iWord): Promise<void> => {
    try {
      const response = await axios.post("/api/cards", {
        foreignWord: word,
        nativeWord: translation,
      });
      const { id, foreignWord, nativeWord } = response.data;
      setElement((prevElement) => [
        {
          id,
          word: foreignWord,
          translation: nativeWord,
        },
        ...prevElement,
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteWord = (id: string): void => {
    setElement((prevElement) => prevElement.filter((e) => e.id !== id));
  };

  const handleUpdate = ({ word, translation, id }: iWord) => {
    const updatedElement = { ...element, word, translation, id };
    setWord(word);
    setTranslation(translation);
    setElement([updatedElement]);
  };

  return (
    <section className="dictionary max-w-screen-xl mx-auto py-8 pt-40 flex flex-col items-center w-full h-full">
      <div className="flex items-center justify-between w-full">
        <Search />
        <PopupAdd onAdd={save} />
      </div>
      <ul className="mt-8 grid grid-cols-4 w-full gap-5">
        {
        element.length > 0 ? (
          element.map((el) => (
            <Word
              key={el.id}
              id={el.id}
              word={el.word}
              translation={el.translation}
              onDelete={handleDeleteWord}
              onUpdate={handleUpdate}
            />
          ))
        ) : (
          <p>Словарь пуст</p>
        )
       }
      </ul>
    </section>
  );
};

export default Dictionary;
