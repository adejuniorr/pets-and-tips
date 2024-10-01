import { MouseEventHandler } from "react";

type ButtonProps = {
  handleOnClick: MouseEventHandler;
  text: string;
};

export const PrimaryButton = ({ handleOnClick, text }: ButtonProps) => {
  return (
    <button
      className="inline-block transition-all duration-300 relative overflow-hidden z-1 bg-purple-800 text-white shadow-md px-6 py-3 rounded-[32px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[100%] before:bg-purple-400 before:transition-all before:duration-300 before:rounded-[32px] hover:before:w-[100%] active:scale-[.85] "
      onClick={handleOnClick}
    >
      <span className="relative z-5">{text}</span>
    </button>
  );
};
