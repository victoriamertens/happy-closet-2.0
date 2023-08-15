import ClerkAuth from "./ClerkAuth/clerkButton";
import DBConnection from "./DBConnection";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Happy Closet Version 2.0</h1>
        <a href="https://github.com/victoriamertens/happy-closet-2.0">
          Link to GitHub Project
        </a>
        <DBConnection />
        <ClerkAuth />
      </div>
    </main>
  );
}
