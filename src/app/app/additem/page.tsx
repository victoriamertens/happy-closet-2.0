"use client";
import { useState } from "react";
import { InputStyling } from "@/app/_lib/TailwindWrappers/InputStyling";
import { useUser } from "@clerk/clerk-react";
import { ItemType } from "../../../../prisma/queries";
import { ToggleStyling } from "@/app/_lib/TailwindWrappers/ToggleStyling";
import { MainBtnStyling } from "@/app/_lib/TailwindWrappers/MainBtnStyling";

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

    try {
      console.log("Firing");

      // let res = addItem(uploadItemBody);
      fetch("/api/item", {
        method: "POST",
        body: JSON.stringify(uploadItemBody),
      });
    } catch (err) {
      console.log("Error with upload:", err);
    }
  };

  return (
    <div
      id="additem-inputs"
      className="flex flex-col items-center justify-center"
    >
      <div id="upperbox-photo" className="bg-blue h-60"></div>
      <InputStyling
        placeholder="Item Name"
        type="text"
        onChange={(change) => setItemName(change.target.value)}
      />
      <InputStyling
        placeholder="Color"
        type="text"
        onChange={(change) => setItemColor(change.target.value)}
      />
      <InputStyling
        placeholder="Initial Cost"
        type="text"
        onChange={(change) => setItemCost(Number.parseInt(change.target.value))}
      />
      <div id="toggle-inputs" className="grid grid-cols-2 justify-center gap-4">
        <ToggleStyling
          label="Is Secondhand?"
          onChange={(change) => {
            setIsItemSecondhand(!isItemSecondhand);
            console.log("Secondhand onChange trigger activated");
          }}
        />
        <ToggleStyling
          label="Purchased in store?"
          onChange={(change) => {
            setIsItemInStorePurchase(!isItemInStorePurchase);
            console.log("InStore onChange trigger activated");
          }}
        />
        <ToggleStyling
          label="Do you airdry this item?"
          onChange={(change) => {
            setIsItemAirdry(!isItemAirdry);
            console.log("Airdry onChange trigger activated");
          }}
        />

        <ToggleStyling
          label="Is this item Dry Clean Only?"
          onChange={(change) => {
            setIsItemDryCleanOnly(!isItemDryCleanOnly);
            console.log("Dryclean onChange trigger activated");
          }}
        />

        <ToggleStyling
          label="Was this item just purchased?"
          onChange={(change) => {
            setIsItemJustPurchased(!isItemJustPurchased);
            console.log("Justpurchased onChange trigger activated");
          }}
        />

        <ToggleStyling
          label="Do you wash this item in the cold water cycle?"
          onChange={(change) => {
            setIsItemColdWash(!isItemColdWash);
            console.log("Coldwash onChange trigger activated");
          }}
        />
      </div>
      <button className="m-10" onClick={() => uploadItem()}>
        <MainBtnStyling btnType="main" buttonText="Upload" />
      </button>
    </div>
  );
}
