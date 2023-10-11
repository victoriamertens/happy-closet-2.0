import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold m-5"> Happy Closet Homepage</h1>
      <SignOutButton />
    </div>
  );
}
