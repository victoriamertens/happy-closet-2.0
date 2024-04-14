import { PrismaClient } from "@prisma/client";

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
  } finally {
    await prisma.$disconnect();
  }
};

export { createItem };
