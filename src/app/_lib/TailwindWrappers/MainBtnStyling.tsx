import React, { FC, PropsWithChildren } from "react";

interface MainBtnStylingProps extends PropsWithChildren {}

export const MainBtnStyling: FC<MainBtnStylingProps> = ({ children }) => {
  return (
    <div className=" m-2 flex w-72 flex-row justify-center rounded-3xl border-2 border-black p-2">
      {children}
    </div>
  );
};
