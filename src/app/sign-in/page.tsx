import * as Clerk from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function SignIn() {
  let { sessionId } = auth();

  let ClerkSignIn = Clerk.SignIn;

  if (sessionId) {
    redirect("/app/home");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ClerkSignIn />
    </div>
  );
}
