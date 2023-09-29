import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import prisma from "./_lib/prisma";
import { get } from "http";

export default async function ItemStatsProcessing() {
  let user = auth();

  const getStatsFromPrisma = async (userId: string) => {
    try {
      let single_item_query = { where: { user_id: userId } };
      let item = await prisma.items.findFirst(single_item_query);

      const [
        differentOutfitCount,
        itemWearCount,
        itemsPairedWith,
        allItemsRanking,
      ] = await prisma.$transaction([
        //differentOutfitCount = number of distinct outfits item is included in
        prisma.outfits.count({
          where: { items: { some: { id: item?.id } } },
        }),
        //itemWearCount
        prisma.outfit_WearLogs.count({
          where: { outfit: { items: { some: { id: item?.id } } } },
        }),
        //itemsPairedWith
        prisma.items.findMany({
          where: {
            outfits: {
              some: { items: { some: { id: { equals: item?.id } } } },
            },
          },
        }),
        //allItemsRanking
        prisma.items.findMany({
          include: {
            outfits: {
              include: { _count: { select: { wearlog: true } } },
            },
          },
        }),
      ]);

      let costPerWear;
      {
        item.inital_cost
          ? (costPerWear = item.initial_cost / itemWearCount)
          : (costPerWear = 0);
      }

      let itemColorPairs: any[] = [];
      itemsPairedWith.map(
        (itemPairedWith) => itemColorPairs?.push(itemPairedWith.color),
      );

      console.log("HERE:", itemWearCount);
      return <p className="userHERE">Data from database: {itemWearCount}</p>;
    } catch (err) {
      console.log("Error message from Item Prisma Transaction:", err);
      return "Error: No Data in database to fetch";
    }
  };

  if (user.sessionId) {
    const data = await getStatsFromPrisma("abcd1234");
    return data;
  } else {
    return <p>Not signed in, cannot access application data.</p>;
  }
}
