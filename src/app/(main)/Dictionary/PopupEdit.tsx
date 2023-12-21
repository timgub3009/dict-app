import React, { useState } from "react";
import { IWord } from "./Dictionary";
import { isRussian, isEnglish } from "@/utils/validation";

interface PopupEditProps extends IWord {
  popupIsOpened: (open: boolean) => void;
  onUpdate: (updatedWord: IWord) => void;
}

const PopupEdit: React.FC<PopupEditProps> = ({
  id,
  word,
  translation,
  popupIsOpened,
  onUpdate,
}) => {
  const [inputValue, setInputValue] = useState({
    id,
    word,
    translation,
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // if (!isEnglish(inputValue.word)) {
    //   alert("English, motherfucker, English!");
    //   return;
    // }

    // if (!isRussian(inputValue.translation)) {
    //   alert("Говори по-русски, свинья!");
    //   return;
    // }

    onUpdate(inputValue);
    popupIsOpened(false);
  };

  return (
    <div className="w-1/2 h-1/2 absolute top-1/4 left-1/4 bg-black bg-opacity-30 z-[9999]">
      <form
        className="flex justify-center items-center flex-col"
        onSubmit={handleSubmit}
      >
        <input
          id="word"
          type="text"
          name="word"
          className="p-4 w-full"
          value={inputValue.word}
          onChange={handleChange}
        />
        <label htmlFor="word">Слово на иностранном</label>
        <input
          id="translation"
          type="text"
          name="translation"
          className="p-4 w-full"
          value={inputValue.translation}
          onChange={handleChange}
        />
        <label htmlFor="translation">Перевод</label>
        <button type="submit">Ok</button>
      </form>
    </div>
  );
};

export default PopupEdit;
