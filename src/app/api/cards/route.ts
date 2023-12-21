import { NextResponse } from "next/server";

import { isEnglish, isRussian } from "@/utils/validation";

import prismadb from "../../lib/prismadb";
import { NextApiResponse } from "next";

export async function POST(request: Request, res: NextApiResponse) {
  try {
    const body = await request.json();

    const { foreignWord, nativeWord } = body;

    /**
     * TODO: Проверить и переписать метод, пока валидация на сервере не работает почему-то
     */
    // if (!isEnglish(foreignWord) || !isRussian(nativeWord)) {
    //   console.log('Error is here', foreignWord, nativeWord)
    //   res.status(400).json({ error: "Неверный формат данных" });
    //   return;
    // }

    const newCard = await prismadb.card.create({
      data: {
        foreignWord,
        nativeWord,
      },
    });

    return NextResponse.json(newCard);
  } catch (err) {
    console.log(err);
  }
}

export async function GET() {
  try {
    const cards = await prismadb.card.findMany();
    return NextResponse.json(cards);
  } catch (error) {
    console.log(error);
  }
}
