import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import prisma from "./_lib/prisma";
import { get } from "http";

export default async function ItemStatsProcessing() {
  let user = auth();

  const getStats = async (userId: string) => {
    let single_item = { where: { user_id: userId } };

    try {
      let item = await prisma.items.findFirst(single_item);
      let processedItem = JSON.stringify(item);

      const countDifferentOutfit = await prisma.outfits.count({
        where: { items: { some: { id: item?.id } } },
      });

      const wears = await prisma.outfit_WearLogs.count({
        where: { outfit: { items: { some: { id: item?.id } } } },
      });

      let costPerWear;
      {
        item.inital_cost
          ? (costPerWear = item.initial_cost / wears)
          : (costPerWear = 0);
      }

      const itemsPairedWith = await prisma.items.findMany({
        where: {
          outfits: { some: { items: { some: { id: { equals: item?.id } } } } },
        },
      });

      let allItemsRanking = await prisma.items.findMany({
        include: {
          outfits: {
            include: { _count: { select: { wearlog: true } } },
          },
        },
      });

      let itemColorPairs: any[] = [];
      itemsPairedWith.map(
        (itemPairedWith) => itemColorPairs?.push(itemPairedWith.color),
      );

      console.log("HERE:", JSON.stringify(allItemsRanking));
      return <p className="userHERE">Data from database: {processedItem}</p>;
    } catch (err) {
      console.log(err);
      return "Error: No Data in database to fetch";
    }
  };

  if (user.sessionId) {
    const data = await getStats("abcd1234");
    return data;
  } else {
    return <p>Not signed in, cannot access application data.</p>;
  }
}
