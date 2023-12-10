
import Image from "next/image";
import React, { useEffect, useState } from "react";
import deleteBtn from "../../../../public/images/bucket-square-svgrepo-com.svg";
import switcher from "../../../../public/images/changer.svg";
import PopupEdit from "./PopupEdit";
import { iWord } from "./Dictionary";

const Word = ({ word, translation, id, onDelete, onUpdate }: iWord) => {
  const [isRus, setIsRus] = React.useState(false);
  const [editPopupOpened, setEditPopupOpened] = useState(false);

  console.log(word)

  const toggleContent = (evt: React.MouseEvent) => {
    evt.stopPropagation();

    if (!isRus) {
      setIsRus(true);
    } else {
      setIsRus(false);
    }
  };

  const deleting = (id) => {
    onDelete(id);
  };

  const turnEdit = (evt) => {
    if (!editPopupOpened) {
      setEditPopupOpened(true);
    } else {
      setEditPopupOpened(true);
    }
  };

  return (
    <div>
      <li
        onClick={turnEdit}
        className="bg-yellow-100 rounded-lg h-32 flex items-center justify-center font-extrabold text-xl text-center relative cursor-pointer"
      >
        <button onClick={() => deleting(id)}>
          <Image
            src={deleteBtn}
            alt="иконка мусорной корзины"
            height={30}
            width={30}
            className="absolute top-0 right-0"
          />
        </button>
        <button onClick={toggleContent}>
          <Image
            src={switcher}
            alt="иконка замены"
            height={30}
            width={30}
            className="absolute top-0 left-0"
          />
        </button>

        {isRus ? translation : word}
      </li>
      {editPopupOpened && (
        <PopupEdit
          word={word}
          translation={translation}
          popupIsOpened={setEditPopupOpened}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default Word;
