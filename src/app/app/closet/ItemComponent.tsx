import { ItemType } from "../../../../prisma/queries";

type itemComponentProps = {
  key: Number;
  item: ItemType[];
};

export default function ItemComponent(item: itemComponentProps) {
  console.log("In itemComponent:", item);
  return JSON.stringify(item);
}
