import { NextResponse } from "next/server";

export async function POST(req, res) {
  return NextResponse.json(
    {
      status: 200,
      Headers: {
        "Set-Cookie": "theme= Dark; path= /",
      },
    }
  );
}