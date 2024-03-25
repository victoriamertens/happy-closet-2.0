"use client";
import { addItem } from "./addItem";
import { useState } from "react";
import { InputStyling } from "@/app/_lib/TailwindWrappers/InputStyling";

export default function AddItem() {
  const [itemName, setItemName] = useState("Name");
  const [itemColor, setItemColor] = useState("Color");
  const [itemCost, setItemCost] = useState("0");
  const [isItemSecondhand, setIsItemSecondhand] = useState(false);
  const [isItemInStorePurchase, setIsItemInStorePurchase] = useState(false);
  const [isItemAirdry, setIsItemAirdry] = useState(false);

  const uploadItem = () => {
    console.log(
      "Uploading Item button hit:",
      itemName,
      itemColor,
      itemCost,
      isItemSecondhand,
      isItemInStorePurchase,
      isItemAirdry,
    );
  };

  return (
    <div>
      <p> AddItem Page</p>
      <input
        type="text"
        placeholder="Item Name"
        onChange={(change) => setItemName(change.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Color"
        onChange={(change) => setItemColor(change.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Initial Cost"
        onChange={(change) => setItemCost(change.target.value)}
      ></input>
      <label id="secondhand">
        <input
          type="checkbox"
          id="secondhand"
          placeholder="Is secondhand?"
          onChange={(change) => setIsItemSecondhand(!isItemSecondhand)}
        ></input>
        Is secondhand?
      </label>
      <label id="secondhand">
        <input
          type="checkbox"
          id="instore"
          placeholder="Is it instore purchase?"
          onChange={(change) =>
            setIsItemInStorePurchase(!isItemInStorePurchase)
          }
        ></input>
        Purchased in the store?
      </label>
      <label id="secondhand">
        <input
          type="checkbox"
          id="secondhand"
          placeholder="Is secondhand?"
          onChange={(change) => setIsItemAirdry(!isItemAirdry)}
        ></input>
        Do you airdry this item?
      </label>

      <button onClick={() => uploadItem()}>Upload</button>
    </div>
  );
}
