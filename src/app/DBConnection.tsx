// "use client";

import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";

export default async function DBConnection() {
  let user = auth();

  const database = async () => {
    try {
      const prisma = new PrismaClient();
      let newUser = await prisma.items.findFirst();
      let endNewUser = JSON.stringify(newUser);
      return <p className="userHERE">Data from database: {endNewUser}</p>;
    } catch (err) {
      console.log(err);
      return "Error: No Data in database to fetch";
    }
  };

  if (user.sessionId) {
    const data = await database();
    return data;
  } else {
    return <p>Not signed in, cannot access application data.</p>;
  }
}
