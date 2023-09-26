import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";

export default async function ItemDetails() {
  let user = auth();

  const getAllItems = async (userId: string) => {
    try {
      const prisma = new PrismaClient();
      let allItems = await prisma.items.findMany({
        where: { user_id: userId },
      });
      let processedAllItems = JSON.stringify(allItems);

      //Conditionally render depending upon if there are items in closet
      if (allItems.length === 0) {
        return <p>You have no items in your closet!</p>;
      } else {
        return (
          <p className="userHERE">Data from database: {processedAllItems}</p>
        );
      }
    } catch (err) {
      console.log(err);
      return "Error: No Data in database to fetch";
    }
  };

  if (user.sessionId) {
    let userId = user.userId;
    const allItemDetailsJSON = await getAllItems(userId);
    return allItemDetailsJSON;
  } else {
    return <p>Not signed in, cannot access application data.</p>;
  }
}
