"use server";
import { createItem, fetchAllItems } from "../../../../prisma/queries";
import { NextResponse, NextRequest } from "next/server";
// import CurrentUser from "@/app/_lib/ClerkAuth/CurrentUser";
import { currentUser, auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
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
export async function PUT(request: NextRequest) {
  const requestId: undefined | number = await request.json();
  console.log("In delete for Item", requestId);

  try {
    const updatedRecord = await prisma.items.update({
      where: {
        id: Number(requestId),
      },
      data: {
        in_closet: false,
      },
    });

    console.log("Updated record:", updatedRecord);
    return NextResponse.json(
      { message: "Updated record in DB:" + updatedRecord },
      { status: 200 },
    );
  } catch (err) {
    console.log("Error in POST addItem:", err);
    return NextResponse.json(
      { message: "Error updating item to Database" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  const { userId } = auth();
  try {
    console.log("Request to fetchAll:", request);
    const req = await request.json();
    console.log("Request to fetchAll:", req);

    const allItemsResponse = await fetchAllItems(userId);
    return NextResponse.json({ all_items: allItemsResponse }, { status: 200 });
  } catch (err) {
    console.log("Error in GET allItems:", err);
    return NextResponse.json(
      { message: "Error fetching allItems from Database" },
      { status: 500 },
    );
  }
}
