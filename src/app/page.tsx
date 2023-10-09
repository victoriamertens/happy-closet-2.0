import ClerkAuth from "./_lib/ClerkAuth/clerkButton";
import ItemStatsProcessing from "./ItemStatsProcessing";
import AllClosetItems from "./AllClosetItems";

export default async function Home() {
  return (
    <main className="">
      <div className="m-10 flex flex-col justify-around items-center">
        <div id="header-info" className="m-10">
          <h1 className="text-3xl font-bold">Happy Closet Version 2.0</h1>
          <a
            className="text-blue-700 underline m-5 mt-10"
            href="https://github.com/victoriamertens/happy-closet-2.0"
          >
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
