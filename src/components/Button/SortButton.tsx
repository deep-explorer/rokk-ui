import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface SortButtonProps {
  onChange: (isAscending: boolean) => void;
}

export const SortButton = (props: SortButtonProps) => {
  const [isAscending, setAscending] = useState(true);

  return (
    <div className="flex gap-2">
      <div
        className={
          "rounded-full h-11 w-11 text-center cursor-pointer flex justify-center items-center " +
          (!isAscending
            ? "bg-[#111111] border-[#1d1d1d] border-solid border-[1px] text-[#818181]"
            : "bg-[#1d1d1d] text-white")
        }
        onClick={() => {
          setAscending(true);
          props.onChange(true);
        }}>
        <ArrowUpwardIcon />
      </div>
      <div
        className={
          "rounded-full h-11 w-11 text-center cursor-pointer flex justify-center items-center " +
          (isAscending
            ? "bg-[#111111] border-[#1d1d1d] border-solid border-[1px] text-[#818181]"
            : "bg-[#1d1d1d] text-white")
        }
        onClick={() => {
          setAscending(false);
          props.onChange(false);
        }}>
        <ArrowDownwardIcon />
      </div>
    </div>
  );
};
