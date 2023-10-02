import ClerkAuth from "./_lib/ClerkAuth/clerkButton";
import ItemStatsProcessing from "./ItemStatsProcessing";
import AllClosetItems from "./AllClosetItems";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div id="header-info" className="m-60">
          <h1>Happy Closet Version 2.0</h1>
          <a href="https://github.com/victoriamertens/happy-closet-2.0">
            Link to GitHub Project
          </a>
        </div>
        {/* <AllClosetItems /> */}
        <ItemStatsProcessing />
        <ClerkAuth />
      </div>
    </main>
  );
}
