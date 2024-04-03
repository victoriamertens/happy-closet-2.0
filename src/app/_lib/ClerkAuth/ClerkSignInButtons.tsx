import { SignInButton, auth, SignUpButton } from "@clerk/nextjs";
import { MainBtnStyling } from "../TailwindWrappers/MainBtnStyling";

export default function ClerkSignInButtons() {
  return (
    <div id="signInPageBtns" className="flex flex-col items-center">
      <div id="SignInBtn">
        <SignInButton mode="redirect" afterSignInUrl="/app/home">
          <MainBtnStyling btnType="main" buttonText="Sign In" />
        </SignInButton>
      </div>
      <div id="signUpBtn">
        <SignUpButton mode="redirect" afterSignUpUrl="/app/home">
          <MainBtnStyling btnType="secondary" buttonText="Sign Up" />
        </SignUpButton>
      </div>
      <p className="m-2 text-xs">Google Authentication</p>
    </div>
  );
}
