import { SignInButton, SignOutButton, auth, SignUpButton } from "@clerk/nextjs";

export default function ClerkSignInButtons() {
  return (
    <div>
      <SignInButton mode="redirect" /> <SignUpButton mode="redirect" />
    </div>
  );
}
