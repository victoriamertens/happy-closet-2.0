import React, { ChangeEventHandler, FC, PropsWithChildren } from "react";

interface InputStylingProps extends PropsWithChildren {}

export const InputStyling: FC<InputStylingProps> = ({ children }) => {
  return <div className="bg-slate-500 p-10">{children}</div>;
};
