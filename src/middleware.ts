import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/about", "/api/items"],
  ignoredRoutes: ["/((?!api|trpc))(_next|.+..+)(.*)", "/api/item"],
});

export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
