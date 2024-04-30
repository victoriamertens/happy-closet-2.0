import { useUser, currentUser } from "@clerk/nextjs";
import { PrismaClient, Prisma } from "@prisma/client";
import ItemComponent from "./ItemComponent";

export default async function Closet() {
  const user = await currentUser();
  const prisma = new PrismaClient();

  if (user) {
    try {
      const allItems = await prisma.items.findMany({
        where: { user_id: user.id },
      });
      return (
        <div className="-mb-20 h-screen scroll-pb-24 overflow-auto pb-24">
          {allItems.map((item) => (
            <ItemComponent key={item.id} item={item} />
          ))}
        </div>
      );
    } catch (error) {
      console.error("Error fetching allitems:", error);
      return <p>No Items in Database</p>;
    }
  } else {
    //Design decision, redirect or have this catch? With Middleware, this should never be hit anyway
    return <p>Not Signed In</p>;
  }
}
