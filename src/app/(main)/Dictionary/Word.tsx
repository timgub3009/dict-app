import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import deleteBtn from "../../../../public/images/bucket-square-svgrepo-com.svg";
import switcher from "../../../../public/images/changer.svg";
import PopupEdit from "./PopupEdit";
import { IWord } from "./Dictionary";

interface WordProps extends IWord {
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}

const Word: React.FC<WordProps> = ({
  word,
  translation,
  id,
  onDelete,
  onUpdate,
}: WordProps) => {
  const [isRus, setIsRus] = useState<boolean>(false);
  const [editPopupOpened, setEditPopupOpened] = useState<boolean>(false);

  const toggleContent = (evt: MouseEvent): void => {
    evt.stopPropagation();

    setIsRus((prevIsRus) => !prevIsRus);
  };

  const deleting = (event: MouseEvent): void => {
    event.stopPropagation();
    onDelete(id);
  };

  const turnEdit = (): void => {
    setEditPopupOpened((prevEditPopupOpened) => !prevEditPopupOpened);
    onUpdate(id);
  };

  return (
    <div>
      <li
        onClick={turnEdit}
        className="bg-yellow-100 rounded-lg h-32 flex items-center justify-center font-extrabold text-xl text-center relative cursor-pointer"
      >
        <button onClick={(evt) => deleting(evt)}>
          <Image
            src={deleteBtn}
            alt="иконка мусорной корзины"
            height={30}
            width={30}
            className="absolute top-0 right-0"
          />
        </button>
        <button onClick={(evt) => toggleContent(evt)}>
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
          id={id}
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
