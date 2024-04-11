import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

const ProtectedRoute = ({ children }) => {
  let { sessionId } = auth();

  let userNotLoggedIn = sessionId === null;

  if (userNotLoggedIn) {
    redirect("/");
  }

  return children;
};

export default ProtectedRoute;
