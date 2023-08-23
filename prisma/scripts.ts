import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //first Entry of test data
  const outfit1 = await prisma.outfits.create({
    data: {
      user_id: "abcd1234",
      outfit_image_url: "http://www.outfitURL.com",
      items: {
        create: [
          { user_id: "abcd1234", image_url: "http://www.itemURL1.com" },
          { user_id: "abcd1234", image_url: "http://www.itemURL2.com" },
          { user_id: "abcd1234", image_url: "http://www.itemURL3.com" },
        ],
      },
      wearlog: {
        create: [{ user_id: "abcd1234", reaction: "Dislike" }],
      },
    },
  });

  //Second Entry of test data
  const outfit2 = await prisma.outfits.create({
    data: {
      user_id: "xyz999",
      outfit_image_url: "http://www.outfit2URL.com",
      items: {
        create: [
          { user_id: "xyz999", image_url: "http://www.2itemURL1.com" },
          { user_id: "xyz999", image_url: "http://www.2itemURL2.com" },
        ],
      },
      wearlog: {
        create: [
          { user_id: "xyz999", reaction: "Like" },
          { user_id: "xyz999", reaction: "Dislike" },
        ],
      },
    },
  });

  console.log(outfit1);
  console.log(outfit2);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
