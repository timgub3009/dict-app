import React, { useEffect, useState } from "react";
import Search from "./Search";
import PopupAdd from "./PopupAdd";
import Word from "./Word";
import axios from "axios";

interface ICard {
  id: number;
  foreignWord: string;
  nativeWord: string;
}

export interface IWord {
  id: number;
  word: string;
  translation: string;
}

const Dictionary: React.FC = (): JSX.Element => {
  const [words, setWords] = useState<IWord[]>([]);
  const [newWord, setNewWord] = useState<string>("");
  const [newTranslation, setNewTranslation] = useState<string>("");

  useEffect(() => {
    /**
     * Fetches data from the "/api/cards" endpoint and updates the words state.
     */
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get<ICard[]>("/api/cards");
        if (response.data.length === 0) {
          return;
        }
        const mappedWords: IWord[] = response.data.map((card) => ({
          id: card.id,
          word: card.foreignWord,
          translation: card.nativeWord,
        }));
        setWords(mappedWords);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const saveWord = async ({ word, translation }: IWord): Promise<void> => {
    try {
      const response = await axios.post("/api/cards", {
        foreignWord: word,
        nativeWord: translation,
      });
      const { id, foreignWord, nativeWord } = response.data;
      const newWord: IWord = {
        id,
        word: foreignWord,
        translation: nativeWord,
      };
      setWords((prevWords) => [newWord, ...prevWords]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWord = (id: number): void => {
    setWords((prevWords) => prevWords.filter((word) => word.id !== id));
  };

  const updateWord = ({ word, translation, id }: IWord) => {
    const updatedWord: IWord = { id, word, translation };
    setNewWord(word);
    setNewTranslation(translation);
    setWords([updatedWord]);
  };

  return (
    <section className="dictionary max-w-screen-xl mx-auto py-8 pt-40 flex flex-col items-center w-full h-full">
      <div className="flex items-center justify-between w-full">
        <Search />
        <PopupAdd onAdd={saveWord} />
      </div>
      <ul className="mt-8 grid grid-cols-4 w-full gap-5">
        {words.length > 0 ? (
          words.map((word) => (
            <Word
              key={word.id}
              {...word}
              onDelete={deleteWord}
              onUpdate={updateWord}
            />
          ))
        ) : (
          <p>Словарь пуст</p>
        )}
      </ul>
    </section>
  );
};

export default Dictionary;
