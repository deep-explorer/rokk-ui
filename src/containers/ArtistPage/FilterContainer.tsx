import { SortButton } from "../../components/Button/SortButton";
import { FilterButton } from "../../components/Button/FilterButton";
import BasicInput from "../../components/Input/BasicInput";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const FilterContainer = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <BasicInput
        className="lg:mt-10 lg:mb-6"
        placeholder="Explore Bands, Artists..."
        type="search"
      />
      <div className="flex justify-between">
        <div className="flex flex-wrap w-full gap-4">
          <FilterButton text="Rock" onClick={(isSelected) => {}} />
          <FilterButton text="Electronic" onClick={(isSelected) => {}} />
          <FilterButton text="Hip Hop" onClick={(isSelected) => {}} />
          <FilterButton text="Folk" onClick={(isSelected) => {}} />
          <FilterButton text="Jazz" onClick={(isSelected) => {}} />
          <FilterButton text="Funk" onClick={(isSelected) => {}} />
          <div className="ml-2 md:hidden">
            <div
              className={
                "border-[#2d2d2d] border-[1px] gap-1 h-10 rounded-full py-2 px-4 text-xs text-center flex cursor-pointer font-semibold bg-black"
              }>
              <div className="flex flex-col justify-center">More</div>
              <MoreHorizIcon sx={{ color: "#FF8303" }} />
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-4">
          <div
            className={
              "border-[#2d2d2d] border-[1px] gap-1 h-10 rounded-full py-2 px-4 text-xs text-center flex cursor-pointer font-semibold bg-[#111111]"
            }>
            <div className="flex flex-col justify-center">More</div>
            <MoreHorizIcon sx={{ color: "#FF8303" }} />
          </div>
        </div>
      </div>
      <hr className="border-gray-700 border-[1px]" />
      <div className="flex justify-between mb-3">
        <SortButton onChange={() => {}} />
        <div
          className={
            "border-[#2d2d2d] border-[1px] gap-1 h-10 rounded-full py-2 px-4 text-xs text-center flex cursor-pointer font-semibold text-white bg-[#111111]"
          }>
          <div className="flex flex-col justify-center">GET STARTED</div>
        </div>
      </div>
    </div>
  );
};
