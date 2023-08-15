import {
  SignInButton,
  SignOutButton,
  useUser,
  useAuth,
  auth,
  SignUpButton,
} from "@clerk/nextjs";

function ClerkAuth() {
  let user = auth();

  return (
    <div>
      {user.sessionId && <h3>You are signed in to Happy Closet!</h3>}
      {user.sessionId && <SignOutButton />}

      {!user.sessionId && <h3>Welcome, please sign in!</h3>}
      {!user.sessionId && <SignInButton />}
      {!user.sessionId && <SignUpButton />}
    </div>
  );
}

export default ClerkAuth;
