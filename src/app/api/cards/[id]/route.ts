import { NextResponse } from "next/server";
import prismadb from "../../../lib/prismadb";
import { isEnglish, isRussian } from "@/utils/validation";
import { NextApiResponse } from "next";

/**
 * Удаляет карточку из базы данных (и из списка карточек на сайте)
 *
 * @param {Request} request - объект запроса HTTP, содержащий URL
 * @returns {Response} - возвращает ответ сервера: если карточка успешно удалена, то объект карточки, если нет - ошибку.
 *
 */

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();
    const deleteCard = await prismadb.card.delete({
      where: { id },
    });

    return NextResponse.json(deleteCard);
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const { id, foreignWord, nativeWord } = body;

    const updateCard = await prismadb.card.update({
      where: { id },
      data: {
        foreignWord,
        nativeWord,
      },
    });
    return NextResponse.json(updateCard);
  } catch (error) {
    console.log(error);
  }
}
