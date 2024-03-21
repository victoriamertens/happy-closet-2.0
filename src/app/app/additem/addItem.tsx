"use server";
import { createItem, ItemType } from "../../../../prisma/queries";

export const addItem = () => {
  console.log("In addItem Function");
  let body: ItemType = {
    user_id: "2",
    name: "testCreateItemName",
    date_added: new Date(),
    color: "white",
    image_url: "testCreate.com",
    initial_cost: 60,
    is_secondhand: true,
    is_instorepurchase: false,
    is_airdry: false,
    is_drycleanonly: false,
    is_coldwash: false,
    is_justpurchased: false,
  };

  createItem(body);
};
