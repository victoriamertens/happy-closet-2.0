"use client";
import { addItem } from "./addItem";
import { useState } from "react";
import { InputStyling } from "@/app/_lib/TailwindWrappers/InputStyling";
import { useUser } from "@clerk/clerk-react";
import { ItemType } from "../../../../prisma/queries";

export default function AddItem() {
  const [itemName, setItemName] = useState("Name");
  const [itemColor, setItemColor] = useState("Color");
  const [itemCost, setItemCost] = useState(0);
  const [isItemSecondhand, setIsItemSecondhand] = useState(false);
  const [isItemInStorePurchase, setIsItemInStorePurchase] = useState(false);
  const [isItemAirdry, setIsItemAirdry] = useState(false);
  const [isItemDryCleanOnly, setIsItemDryCleanOnly] = useState(false);
  const [isItemColdWash, setIsItemColdWash] = useState(false);
  const [isItemJustPurchased, setIsItemJustPurchased] = useState(false);

  const { user, isSignedIn } = useUser();

  const uploadItem = () => {
    if (!isSignedIn) {
      return;
    }

    console.log("Uploading Item button hit:", itemName);
    let uploadItemBody: ItemType = {
      user_id: user.id,
      name: itemName,
      date_added: new Date(),
      color: itemColor,
      image_url: "name.com",
      initial_cost: itemCost,
      is_secondhand: isItemSecondhand,
      is_instorepurchase: isItemInStorePurchase,
      is_airdry: isItemAirdry,
      is_drycleanonly: isItemDryCleanOnly,
      is_coldwash: isItemColdWash,
      is_justpurchased: isItemJustPurchased,
    };

    addItem(uploadItemBody);
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
        onChange={(change) => setItemCost(Number.parseInt(change.target.value))}
      ></input>
      <label id="secondhand">
        <input
          type="checkbox"
          id="secondhand"
          onChange={(change) => setIsItemSecondhand(!isItemSecondhand)}
        ></input>
        Is secondhand?
      </label>
      <label id="purchasedinstore">
        <input
          type="checkbox"
          id="instore"
          onChange={(change) =>
            setIsItemInStorePurchase(!isItemInStorePurchase)
          }
        ></input>
        Purchased in the store?
      </label>
      <label id="airdry">
        <input
          type="checkbox"
          id="airdry"
          onChange={(change) => setIsItemAirdry(!isItemAirdry)}
        ></input>
        Do you airdry this item?
      </label>

      <label id="dryclean">
        <input
          type="checkbox"
          id="dryclean"
          onChange={(change) => setIsItemDryCleanOnly(!isItemDryCleanOnly)}
        ></input>
        Do you dryclean this item?
      </label>

      <label id="justpurchased">
        <input
          type="checkbox"
          id="justpurchased"
          onChange={(change) => setIsItemJustPurchased(!isItemJustPurchased)}
        ></input>
        Was this item just purchased?
      </label>

      <label id="coldwash">
        <input
          type="checkbox"
          id="coldwash"
          onChange={(change) => setIsItemColdWash(!isItemColdWash)}
        ></input>
        Is this item washed in cold water?
      </label>

      <button onClick={() => uploadItem()}>Upload</button>
    </div>
  );
}
