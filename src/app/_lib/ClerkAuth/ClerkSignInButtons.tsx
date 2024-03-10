import { SignInButton, auth, SignUpButton } from "@clerk/nextjs";
import { MainBtnStyling } from "../TailwindWrappers/MainBtnStyling";

export default function ClerkSignInButtons() {
  return (
    <div id="signInPageBtns" className="flex flex-col items-center">
      <div id="SignInBtn">
        <MainBtnStyling btnType="main">
          <SignInButton mode="redirect">
            <button className="p-2 font-bold tracking-widest">Sign in</button>
          </SignInButton>
        </MainBtnStyling>
      </div>
      <div id="signUpBtn">
        <MainBtnStyling btnType="secondary">
          <SignUpButton mode="redirect">
            <button className="p-2 font-bold tracking-widest">Sign up</button>
          </SignUpButton>
        </MainBtnStyling>
      </div>
      <p className="m-2 text-xs">Google Authentication</p>
    </div>
  );
}
