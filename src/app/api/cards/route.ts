import { NextResponse } from "next/server";

import prismadb from "../../lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { foreignWord, nativeWord } = body;

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
