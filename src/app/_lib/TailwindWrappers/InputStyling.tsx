import React, {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";

interface InputStylingProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const InputStyling: FC<InputStylingProps> = ({
  children,
  placeholder,
  ...rest
}) => {
  return (
    <div className="relative my-5 w-full border border-black ">
      <span className="absolute left-3 top-[-20px] m-0 bg-white px-2  text-gray-400">
        {placeholder}
      </span>
      <input {...rest} className="h-10 w-full px-4"></input>
    </div>
  );
};
