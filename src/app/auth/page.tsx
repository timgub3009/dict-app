"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import logo from "../../../public/images/logo.svg";
import Input from "../(common)/Input";
import axios from "axios";

const AuthForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState("authorized");

  const toggleStatus = useCallback(() => {
    setStatus((currentStatus) =>
      currentStatus === "authorized" ? "unauthorized" : "authorized"
    );
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password]);

  return (
    <div className=" relative h-full w-full bg-[url(/images/startingPic.png)] bg-center bg-no-repeat bg-fixed bg-cover">
      <div className=" bg-black w-full h-full lg:bg-opacity-50">
        <nav className="flex items-center gap-2 text-white py-3 px-5">
          <Image src={logo} alt="логотип" width={30} height={30} />
          <p>Словоуч</p>
        </nav>
        <div className=" flex justify-center items-center">
          <div className=" bg-black lg:w-1/4 px-10 py-10 bg-opacity-70 rounded-md">
            <h2 className="text-white font-semibold text-xl">
              {status === "authorized" ? "Залогиниться" : "Зарегистрироваться"}
            </h2>
            <form className=" flex flex-col gap-4 mt-3">
              {status === "unauthorized" && (
                <Input
                  label="Имя пользователя"
                  onChange={(evt: any) => setName(evt.target.value)}
                  id="user"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(evt: any) => setEmail(evt.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Пароль"
                onChange={(evt: any) => setPassword(evt.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </form>
            <button
              className=" bg-red-400 rounded-md p-2 w-full mt-8 transition hover:bg-red-500"
              onClick={register}
            >
              {status === "unauthorized" ? "Создать аккаунт" : "Войти"}
            </button>
            <p className=" text-neutral-400 mt-9 text-center">
              {status === "authorized"
                ? "Ещё не регистрировался?"
                : "Уже есть аккаунт?"}
              <span
                onClick={toggleStatus}
                className=" text-white ml-1 hover:underline-offset-1 cursor-pointer"
              >
                {status === "authorized"
                  ? "Тогда создавай аккаунт!"
                  : "Тогда залогинься!"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
