"use client";

import SignInPage from "./signIn";
import SignUpPage from "@/app/ClerkAuth/signUp";
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
      {!user.isSignedIn && <SignInButton />}
      {!user.isSignedIn && <SignUpButton />}

      <SignInPage />
      <SignUpPage />
    </div>
  );
}

export default ClerkAuth;
