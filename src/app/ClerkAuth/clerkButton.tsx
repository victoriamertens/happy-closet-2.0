"use client";

import {
  SignInButton,
  SignOutButton,
  useUser,
  useAuth,
  SignUpButton,
} from "@clerk/nextjs";

import WithUser from "./WithUser";

function ClerkAuth() {
  let user = useAuth();

  return (
    <div>
      {user.isSignedIn && (
        <h3>
          <WithUser />
        </h3>
      )}
      {user.isSignedIn && <SignOutButton />}

      {!user.isSignedIn && <h3>Welcome, please sign in!</h3>}
      {!user.isSignedIn && <SignInButton />}
      {!user.isSignedIn && <SignUpButton />}
    </div>
  );
}

export default ClerkAuth;
