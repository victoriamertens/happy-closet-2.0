import type { Items } from "@prisma/client";

type itemComponentProps = {
  key: Number;
  item: Items;
};

export default function ItemComponent(item: itemComponentProps) {
  console.log("In itemComponent:", item);
  return (
    <div className="w-96 overflow-auto border">
      <p>{item.item.item_name}</p>
    </div>
  );
}