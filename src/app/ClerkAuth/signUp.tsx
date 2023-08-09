"use client";

import { SignUp } from "@clerk/clerk-react";

function SignUpPage() {
  return <SignUp path="/signUp" routing="path" />;
}

export default SignUpPage;
