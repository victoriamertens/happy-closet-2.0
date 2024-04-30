import type { Items } from "@prisma/client";
import Link from "next/link";

type itemComponentProps = {
  key: Number;
  item: Items;
};

export default function ItemComponent(item: itemComponentProps) {
  let itemDetailsPath = "/app/closet/" + item.item.id;

  return (
    <Link href={itemDetailsPath} className="w-96 overflow-auto border">
      <p>{item.item.item_name}</p>
    </Link>
  );
}
