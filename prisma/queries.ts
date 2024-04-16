import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export type ItemType = {
  user_id: string;
  item_name: string;
  date_added: Date;
  primary_color: string;
  secondary_color: string;
  tertiary_color: string;
  patterned_item: boolean;
  pattern_type: string;
  description_word: string;
  image_url: string;
  initial_cost: number;
  is_secondhand: boolean;
  is_justpurchased: boolean;
  purchased_date: Date;
};

const createItem = async (item: ItemType) => {
  console.log("In backend createItem:", item);
  try {
    const newItem = await prisma.items.create({
      data: {
        user_id: item.user_id,
        item_name: item.item_name,
        date_added: new Date(),
        primary_color: item.primary_color,
        image_url: item.image_url,
        initial_cost: item.initial_cost,
        is_secondhand: item.is_secondhand,
        is_justpurchased: item.is_justpurchased,
        secondary_color: item.secondary_color,
        tertiary_color: item.tertiary_color,
        purchased_date: new Date(),
        patterned_item: item.patterned_item,
        pattern_type: item.pattern_type,
        description_word: item.description_word,
      },
    });
    console.log("New item created:", newItem);
  } catch (error) {
    console.error("Error creating item:", error);
  }
};

const fetchAllItems = async (userId: string | null) => {
  console.log("In backend fetchAllItems:", userId);
  if (userId) {
    try {
      const allItems = await prisma.items.findMany({
        where: { user_id: userId },
      });
      return NextResponse.json({ all_items: allItems }, { status: 200 });
    } catch (error) {
      console.error("Error fetching allitems:", error);
      return NextResponse.json(
        { error: "Internal Server Error with allItems fetch: " + error },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json(
      { error: "No userId, not signed in" },
      { status: 500 },
    );
  }
};

export { createItem, fetchAllItems };
