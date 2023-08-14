"use client";

import {
  SignInButton,
  SignOutButton,
  useUser,
  SignUpButton,
} from "@clerk/nextjs";

function ClerkAuth() {
  let user = useUser();

  return (
    <div>
      {user.isSignedIn && <h3>Hello, {user.user.fullName}!</h3>}
      {user.isSignedIn && <SignOutButton />}

      {!user.isSignedIn && <h3>Welcome, please sign in!</h3>}
      {!user.isSignedIn && <SignInButton />}
      {!user.isSignedIn && <SignUpButton />}
    </div>
  );
}

export default ClerkAuth;
