import { SignInButton, SignOutButton, auth, SignUpButton } from "@clerk/nextjs";

import CurrentUser from "./CurrentUser";

function ClerkAuth() {
  let user = auth();

  return (
    <div className="flex flex-col ">
      {user.sessionId && (
        <h3>
          <CurrentUser /> you are signed in to Happy Closet!
        </h3>
      )}
      {user.sessionId && <SignOutButton />}
      <div id="clerk-auth" className="flex flex-col items-center m-5">
        {!user.sessionId && (
          <h3 className="text-base font-bold">Welcome, please sign in!</h3>
        )}
        <div className="flex ">
          {!user.sessionId && (
            <div
              id="signin-btn-wrapper"
              className="p-1 m-1 border-solid border-2 rounded border-black bg-blue-400 "
            >
              <SignInButton />
            </div>
          )}

          {!user.sessionId && (
            <div
              id="signin-btn-wrapper"
              className="p-1 m-1 border-solid border-2 rounded border-black bg-blue-100 "
            >
              <SignUpButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClerkAuth;
