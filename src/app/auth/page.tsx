import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.svg";
import Input from "../(common)/Input";

const Auth = () => {
  return (
    <div className=" relative h-full w-full bg-[url(/images/startingPic.png)] bg-center bg-no-repeat bg-fixed bg-cover">
      <div className=" bg-black w-full h-full lg:bg-opacity-50">
        <nav className="flex items-center gap-2 text-white py-3 px-5">
          <Image src={logo} alt="логотип" width={30} height={30} />
          <p>Словоуч</p>
        </nav>
        <div className=" flex justify-center">
          <div className=" bg-black lg:w-2/5 px-10 py-10 bg-opacity-70 rounded-md">
            <h2 className="text-white font-semibold">Войти в аккаунт</h2>
            <div className=" flex flex-col gap-4">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
