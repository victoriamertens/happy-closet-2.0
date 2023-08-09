import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import SignInPage from "../signIn";
import SignUpPage from "@/signUp";

const fun = async () => {
  try {
    const prisma = new PrismaClient();
    let newUser = await prisma.userExample.findFirst();
    let endNewUser = JSON.stringify(newUser);
    return endNewUser;
  } catch (err) {
    console.log(err);
    return "Error: cannot complete request";
  }
};

export default async function Home() {
  const user = await fun();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {/* LOOK HERE: {user} */}
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <SignInPage />
        <SignUpPage />
      </div>
    </main>
  );
}
