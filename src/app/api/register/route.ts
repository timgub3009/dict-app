import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prismadb from "../../lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse("Не заполнены данные", { status: 400 });
    }

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    // checking dublicates throw emails, because it's the main key (identifier)
    if (existingUser) {
      return new NextResponse("Такой email уже используется", { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        avatar: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return new NextResponse("Ошибка с регистрацией", { status: 500 });
  }
}
