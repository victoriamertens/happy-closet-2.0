"use server";
import { createItem } from "../../../../prisma/queries";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // Do whatever you want
  console.log("In post for addItem");

  try {
    const req = await request.json();
    await createItem(req);
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
  } catch (err) {
    console.log("Error in POST addItem:", err);
    return NextResponse.json(
      { message: "Error adding item to Database" },
      { status: 500 },
    );
  }
}
