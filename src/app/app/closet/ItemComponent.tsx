import type { Items } from "@prisma/client";

type itemComponentProps = {
  key: Number;
  item: Items;
};

export default function ItemComponent(item: itemComponentProps) {
  console.log("In itemComponent:", item);
  return JSON.stringify(item);
}
