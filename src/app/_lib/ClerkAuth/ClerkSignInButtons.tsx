import { SignInButton, auth, SignUpButton } from "@clerk/nextjs";
import { MainBtnStyling } from "../TailwindWrappers/MainBtnStyling";

export default function ClerkSignInButtons() {
  return (
    <div id="signInPageBtns" className="flex flex-col items-center">
      <div id="SignInBtn">
        <SignInButton mode="redirect">
          <MainBtnStyling btnType="main" />
        </SignInButton>
      </div>
      <div id="signUpBtn">
        <SignUpButton mode="redirect">
          <MainBtnStyling btnType="secondary" />
        </SignUpButton>
      </div>
      <p className="m-2 text-xs">Google Authentication</p>
    </div>
  );
}
