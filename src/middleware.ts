// import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ["/", "sign-in", "/about"],
//   afterAuth(auth, req, evt) {
//     if (auth.sessionId && req.nextUrl.pathname) {
//     }
//     if (!auth.userId && !auth.isPublicRoute) {
//       return redirectToSignIn({
//         returnBackUrl: req.experimental_clerkUrl.origin,
//       });
//     }
//   },
// });

// export const config = {
//   matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
// };

import { withClerkMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default withClerkMiddleware(() => {
  console.log("Middleware Running");
  return NextResponse.next();
});

export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
