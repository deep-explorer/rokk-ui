import React from "react";

const PasswordInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...props
}) => {
  const [isHide, setIsHide] = React.useState(true);

  return (
    <div>
      <input
        {...props}
        type={isHide ? "password" : ""}
        className="text-[14px] py-[13px] pl-[24px] focus:outline-0 rounded-full focus:border-gray-600 focus:bg-white focus:text-black focus: w-full bg-white bg-opacity-10 text-white"
      />
    </div>
  );
};

export default PasswordInput;
