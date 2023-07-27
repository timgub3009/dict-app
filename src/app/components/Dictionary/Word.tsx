type WordProps = {
  id: string;
  word: string;
  translation: string;
};

import React from "react";

const Word = ({ id, word, translation }: WordProps) => {
  const [isRus, setIsRus] = React.useState(false);

  const toggleContent = () => {
    if (!isRus) setIsRus(true);
    else {
      setIsRus(false);
    }
  };

  return (
    <button onClick={toggleContent}>
      <li className="bg-yellow-100 rounded-lg transition shadow-sm hover:shadow-lg cursor-pointer h-32 flex items-center justify-center font-extrabold text-xl text-center">
        {isRus ? translation : word}
      </li>
    </button>
  );
};

export default Word;
