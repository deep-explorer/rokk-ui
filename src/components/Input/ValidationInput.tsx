import React, { HTMLAttributes, useEffect, useState } from "react";
import BasicInput from "./BasicInput";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  error?: boolean;
  innerRef: any;
}

export const ValidationInput = ({ helperText, error, ...props }: Props) => {
  return (
    <div>
      <BasicInput {...props} />
      <div
        className={
          "h-6 pt-1 px-6 text-xs text-red-500 " + (error ? "" : "invisible")
        }>
        {helperText}
      </div>
    </div>
  );
};
