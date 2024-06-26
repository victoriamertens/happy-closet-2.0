import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/about"],
});

export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
