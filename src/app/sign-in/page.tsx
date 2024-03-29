import * as Clerk from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function SignIn() {
  let { sessionId } = auth();

  let SignIn = Clerk.SignIn;

  if (sessionId) {
    redirect("/app/home");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <SignIn />
    </div>
  );
}
