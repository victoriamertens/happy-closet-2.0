import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import ClerkAuth from "./ClerkAuth/clerkButton";

const fun = async () => {
  try {
    const prisma = new PrismaClient();
    let newUser = await prisma.userExample.findFirst();
    let endNewUser = JSON.stringify(newUser);
    return endNewUser;
  } catch (err) {
    console.log(err);
    return "Error: No Data in database to fetch";
  }
};

export default async function Home() {
  const user = await fun();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Happy Closet Version 2.0</h1>
        <a href="https://github.com/victoriamertens/happy-closet-2.0">
          Link to GitHub Project
        </a>
        <p>Testing Connection to Database: {user}</p>
        <ClerkAuth />
      </div>
    </main>
  );
}
