import { PrismaClient } from "@prisma/client/extension";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// タスクの作成
export async function POST (request: Request) {
  const { title } = await request.json();

  // バリデーション
  if (!title) {
    return NextResponse.json(
      { error: 'タイトルが必要です' },
      { status: 400 }
    )
  }

  try {
    const newTodo = await prisma.todo.create({
      data: {
        title,
        completed: false,
      },
    });
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'タスクの作成に失敗しました' }, { status: 500 })
  }
}