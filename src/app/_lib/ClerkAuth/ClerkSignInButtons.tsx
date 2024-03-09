import { SignInButton, auth, SignUpButton } from "@clerk/nextjs";
import { MainBtnStyling } from "../TailwindWrappers/MainBtnStyling";

export default function ClerkSignInButtons() {
  return (
    <div id="signInPageBtns" className="flex flex-col items-center">
      <div id="SignInBtn">
        <MainBtnStyling>
          <SignInButton mode="redirect">
            <button className="font-bold">Sign in</button>
          </SignInButton>
        </MainBtnStyling>
      </div>
      <div id="signUpBtn">
        <MainBtnStyling>
          <SignUpButton mode="redirect">
            <button className="font-bold">Sign up</button>
          </SignUpButton>
        </MainBtnStyling>
      </div>
      <p className="m-2 text-xs">Google Authentication</p>
    </div>
  );
}
