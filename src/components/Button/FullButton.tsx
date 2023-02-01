import React from "react";

const FullButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="active:bg-orange-300 hover:bg-orange-400 text-[18px] py-[13px] w-full bg-[#FF8303] text-black leading-[27px] font-bold rounded-full"
      {...props}>
      {children}
    </button>
  );
};

export default FullButton;
