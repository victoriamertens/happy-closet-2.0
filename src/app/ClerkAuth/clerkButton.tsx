import { SignInButton, SignOutButton, auth, SignUpButton } from "@clerk/nextjs";

import CurrentUser from "./CurrentUser";

function ClerkAuth() {
  let user = auth();

  return (
    <div>
      {user.sessionId && (
        <h3>
          <CurrentUser /> You are signed in to Happy Closet!
        </h3>
      )}
      {user.sessionId && <SignOutButton />}

      {!user.sessionId && <h3>Welcome, please sign in!</h3>}
      {!user.sessionId && <SignInButton />}
      {!user.sessionId && <SignUpButton />}
    </div>
  );
}

export default ClerkAuth;
