import { Artist } from "../../apis/artist";
import { ArtistCard } from "../../components/Card/ArtistCard";
interface CardsContainerProps {
  artists?: Artist[];
}

export const CardsContainer = (props: CardsContainerProps) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-1 md:gap-2 lg:gap-4 xl:gap-6 justify-center">
      {props.artists?.map((artist, index) => (
        <div className="flex justify-center" key={artist.uuid + index}>
          <ArtistCard
            name={artist.name}
            type={artist.type}
            releasesCount={Number(artist.popularity)}
            imageUrl={"/assets/mock-cards/card1.png"}
            isSelected={false}
            // key={artist.uuid}
          />
        </div>
      ))}
    </div>
  );
};
