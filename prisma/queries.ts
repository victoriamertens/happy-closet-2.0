import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type itemType = {
  user_id: string;
  name: string;
  date_added: Date;
  color: string;
  image_url: string;
  initial_cost: number;
  is_secondhand: boolean;
  is_instorepurchase: boolean;
  is_airdry: boolean;
  is_drycleanonly: boolean;
  is_coldwash: boolean;
  is_justpurchased: boolean;
};

const createItem = async (item: itemType) => {
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
        // Fill in other fields as needed
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
