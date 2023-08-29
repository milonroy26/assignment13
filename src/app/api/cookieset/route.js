import { NextResponse } from "next/server";

export async function POST(req, res) {
  return NextResponse.json(
    {
      message: "request complite",
    },
    {
      status: 200,
      headers: {
        "Set-Cookie": "theme= Dark; path= /",
      },
    }
  );
}