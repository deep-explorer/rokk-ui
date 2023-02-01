import { useState } from "react";

interface FilterButtonProps {
  text: string;
  onClick: (isSelected: boolean) => void;
}
export const FilterButton = (props: FilterButtonProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={
        "h-10 rounded-full py-2 px-4 text-xs text-center flex flex-col justify-center cursor-pointer font-semibold  " +
        (selected ? "bg-[#FF8303] text-black" : "bg-[#2d2d2d] text-white")
      }
      onClick={() => {
        props.onClick(!selected);
        setSelected(!selected);
      }}>
      {props.text}
    </div>
  );
};
