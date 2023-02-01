import { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";

export interface ArtistCardProps {
  imageUrl: string;
  name: string;
  type: string;
  releasesCount: number;
  isRokk?: boolean;
  isSelected: boolean;
}

export const ArtistCard = (props: ArtistCardProps) => {
  const [isSelected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(props.isSelected);
  }, []);

  return (
    <div
      className={
        "w-[166px] h-[217px] lg:w-[187px] lg:h-[247px] bg-[#111] rounded-lg cursor-pointer  p-[1px] " +
        (isSelected && "bg-gradient-to-b from-[#FF8303] to-[#060606]")
      }
      onClick={() => setSelected(!isSelected)}>
      <div
        className="h-full w-full bg-[#1a1a1a] back rounded-lg"
        style={{
          background:
            "linear-gradient(180.28deg, #232323 60.75%, #0B0B0B 99.76%)",
        }}>
        <div className="p-[10px] w-full rounded-sm flex flex-col justify-center">
          <img src={props.imageUrl} alt={props.name} />
        </div>
        <div className="px-3 flex gap-2">
          <div className="w-5/6">
            <div className="text-sm text-white font-medium h-5 overflow-hidden">
              {props.name}
            </div>
            <div className="flex gap-2">
              <span className="text-xs">
                {props.type === "ARTIST" ? "Artist" : "Band"}
              </span>
              <span className="text-xs">
                {props.releasesCount + " Releases"}
              </span>
            </div>
          </div>
          <div className="flex w-1/6">
            {isSelected && <DoneIcon sx={{ color: "#FF8303" }} />}
            {props.isRokk && (
              <img className="w-5 h-5" src="/assets/card-logo.png" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
