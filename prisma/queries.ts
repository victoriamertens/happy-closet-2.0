import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type ItemType = {
  user_id: string;
  item_name: string;
  date_added: Date;
  primary_color: string;
  secondary_color: String;
  tertiary_color: String;
  patterned_item: Boolean;
  pattern_type: String;
  description_word: String;
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
        name: item.name,
        date_added: new Date(),
        color: item.color,
        image_url: item.image_url,
        initial_cost: item.initial_cost,
        is_secondhand: item.is_secondhand,
        is_instorepurchase: item.is_instorepurchase,
        is_airdry: item.is_airdry,
        is_drycleanonly: item.is_drycleanonly,
        is_coldwash: item.is_coldwash,
        is_justpurchased: item.is_justpurchased,
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
