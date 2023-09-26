import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import prisma from "./_lib/prisma";

export default async function allClosetItems() {
  let user = auth();

  const getAllItems = async (userId: string) => {
    try {
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
