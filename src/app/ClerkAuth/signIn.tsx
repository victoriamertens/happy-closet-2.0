import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return <SignIn path="/signIn" routing="path" signUpUrl="sign-up" />;
}

export default SignInPage;
