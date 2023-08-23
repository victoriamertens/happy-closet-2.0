import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const outfits = await prisma.outfits.create({
    data: {
      user_id: "abcd1234",
      outfit_image_url: "http://www.outfitURL.com",
      items: {
        create: [
          {
            user_id: "abcd1234",
            image_url: "http://www.itemURL1.com",
          },
          { user_id: "abcd1234", image_url: "http://www.itemURL2.com" },
        ],
      },
    },
  });

  console.log(outfits);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
