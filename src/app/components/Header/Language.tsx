import React from "react";
import Image from "next/image";
import flag from "../../../../public/images/united-kingdom.png";

const Language = () => {
  return (
    <>
      <div className="header__language">EN</div>
      <Image
        src={flag}
        alt="флаг страны выбранного языка"
        className="w-8 h-8"
      />
    </>
  );
};

export default Language;
