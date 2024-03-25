"use server";
import { createItem, ItemType } from "../../../../prisma/queries";

export const addItem = (uploadItemBody: ItemType) => {
  try {
    console.log("In addItem Function");
    //Server Logic goes here for addItem
    createItem(uploadItemBody);
  } catch (err) {
    console.log("Error on addItem in server:", err);
  }
};
