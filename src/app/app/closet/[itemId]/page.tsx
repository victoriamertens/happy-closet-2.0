import { PrismaClient } from "@prisma/client";
import { useUser, currentUser } from "@clerk/nextjs";

export default async function Item({ params }: { params: { itemId: number } }) {
  const prisma = new PrismaClient();
  const user = await currentUser();
  if (user) {
    const singleItemDetails = await prisma.items.findFirst({
      where: { user_id: user.id, id: Number(params.itemId) },
    });
    return <p> Item: {JSON.stringify(singleItemDetails)}</p>;
  }
}
