import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Search from "@mui/icons-material/Search";

const BasicInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...props
}) => {
  const [isPasswordReveal, setPasswordReveal] = useState(false);
  const [isFocus, setFocus] = useState(false);

  return (
    <div className="flex relative">
      <input
        {...props}
        type={
          isPasswordReveal && props.type === "password" ? "text" : props.type
        }
        className={
          "text-[14px] py-[13px] pl-[24px] pr-6 focus:outline-0 rounded-full font-medium focus:bg-white focus:text-black focus: w-full bg-[#2d2d2d] text-white " +
          (props.type === "search" && "pl-12")
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {props.type === "password" && (
        <div
          className="absolute right-4 bottom-3 cursor-pointer"
          onClick={() => {
            setPasswordReveal(!isPasswordReveal);
          }}>
          {isPasswordReveal ? (
            <VisibilityOff sx={{ color: isFocus ? "black" : "" }} />
          ) : (
            <Visibility sx={{ color: isFocus ? "black" : "" }} />
          )}
        </div>
      )}
      {props.type === "search" && (
        <div className="absolute left-4 bottom-3 cursor-pointer">
          <Search sx={{ color: "#FF8303" }} />
        </div>
      )}
    </div>
  );
};

export default BasicInput;
