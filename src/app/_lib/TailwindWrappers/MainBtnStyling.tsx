import React, { FC, PropsWithChildren } from "react";

interface MainBtnStylingProps extends PropsWithChildren {
  btnType: string;
}

export const MainBtnStyling: FC<MainBtnStylingProps> = ({
  children,
  btnType,
}) => {
  let dynamicStyling;
  let signInText;
  if (btnType === "main") {
    dynamicStyling = "bg-teal-400 text-teal-900 hover:bg-teal-500";
    signInText = "Sign In";
  } else if (btnType === "secondary") {
    dynamicStyling = "border-black hover:bg-teal-100";
    signInText = "Sign Up";
  }

  return (
    <button
      className={
        " m-2 flex w-72 flex-row justify-center rounded-3xl border-2 shadow-2xl " +
        dynamicStyling
      }
    >
      <p className="p-2 font-bold tracking-widest">{signInText}</p>
    </button>
  );
};
