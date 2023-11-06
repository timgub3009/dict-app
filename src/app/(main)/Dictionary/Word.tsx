interface ICard {
  word: string;
  translation: string;
}

import Image from "next/image";
import React from "react";
import deleteBtn from "../../../../public/images/bucket-square-svgrepo-com.svg";

const Word = ({ word, translation }: ICard) => {
  const [isRus, setIsRus] = React.useState(false);

  const toggleContent = (evt: React.MouseEvent) => {
    evt.stopPropagation();

    if (!isRus) {
      setIsRus(true);
    } else {
      setIsRus(false);
    }
  };

  return (
    <div onClick={toggleContent}>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center relative">
        <button onClick={() => {}}>
          <Image
            src={deleteBtn}
            alt="иконка мусорной корзины"
            height={30}
            width={30}
            className="absolute top-0 right-0"
          />
        </button>

        {isRus ? translation : word}
      </li>
    </div>
  );
};

export default Word;
