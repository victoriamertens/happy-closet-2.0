"use client";
import { useState } from "react";
import { InputStyling } from "@/app/_lib/TailwindWrappers/InputStyling";
import { useUser } from "@clerk/clerk-react";
import { ItemType } from "../../../../prisma/queries";
import { ToggleStyling } from "@/app/_lib/TailwindWrappers/ToggleStyling";
import { MainBtnStyling } from "@/app/_lib/TailwindWrappers/MainBtnStyling";

export default function AddItem() {
  const [itemName, setItemName] = useState("Name");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [tertiaryColor, setTertiaryColor] = useState("");
  const [itemCost, setItemCost] = useState(0);
  const [isItemSecondhand, setIsItemSecondhand] = useState(false);
  const [isItemJustPurchased, setIsItemJustPurchased] = useState(false);
  const [patternedItem, setPatternedItem] = useState(false);
  const [patternType, setPatternType] = useState("PatternType");
  const [descriptionWord, setDecsriptionWord] = useState(
    "Default Description Word",
  );

  const { user, isSignedIn } = useUser();

  const uploadItem = () => {
    if (!isSignedIn) {
      return;
    }

    let uploadItemBody: ItemType = {
      user_id: user.id,
      item_name: itemName,
      date_added: new Date(),
      primary_color: primaryColor,
      secondary_color: secondaryColor,
      tertiary_color: tertiaryColor,
      image_url: "name.com",
      initial_cost: itemCost,
      is_secondhand: isItemSecondhand,
      is_justpurchased: isItemJustPurchased,
      purchased_date: new Date(),
      patterned_item: patternedItem,
      pattern_type: patternType,
      description_word: descriptionWord,
    };

    try {
      console.log("Firing");

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
        onChange={(change) => setPrimaryColor(change.target.value)}
      />
      <InputStyling
        placeholder="Initial Cost"
        type="text"
        onChange={(change) => setItemCost(Number.parseInt(change.target.value))}
      />
      <InputStyling
        placeholder="Secondary Color"
        type="text"
        onChange={(change) => setSecondaryColor(change.target.value)}
      />
      <InputStyling
        placeholder="Tertiary Color"
        type="text"
        onChange={(change) => setPatternType(change.target.value)}
      />
      <InputStyling
        placeholder="Pattern Type"
        type="text"
        onChange={(change) => setTertiaryColor(change.target.value)}
      />
      <InputStyling
        placeholder="Description Word"
        type="text"
        onChange={(change) => setDecsriptionWord(change.target.value)}
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
          label="Is Item Patterned?"
          onChange={(change) => {
            setPatternedItem(!patternedItem);
            console.log("Secondhand onChange trigger activated");
          }}
        />
        <ToggleStyling
          label="Was this item just purchased?"
          onChange={(change) => {
            setIsItemJustPurchased(!isItemJustPurchased);
            console.log("Justpurchased onChange trigger activated");
          }}
        />
      </div>
      <button className="m-10" onClick={() => uploadItem()}>
        <MainBtnStyling btnType="main" buttonText="Upload" />
      </button>
    </div>
  );
}
