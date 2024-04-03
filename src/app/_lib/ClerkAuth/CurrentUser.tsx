import { currentUser } from "@clerk/nextjs";

export default async function CurrentUser() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;
  return <div className="text-lg font-bold ">Hello {user?.firstName},</div>;
}
