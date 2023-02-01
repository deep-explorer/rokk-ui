import { useState, useEffect } from "react";
import { ImageContainer } from "./ImageContainer";
import { FilterContainer } from "./FilterContainer";
import { CardsContainer } from "./CardsContainer";
import { Button, MenuItem, Select } from "@mui/material";
import { ProfileButton } from "../../components/Button/ProfileButton";
import { Artist, fetchArtists } from "../../apis/artist";

const ArtistPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(10000);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    if (currentPage < totalPage) {
      fetchArtists({ skip: currentPage, limit: 8 }).then((res) => {
        setTotalPage(res.totalPages);
        setArtists([...artists, ...res.items]);
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <ImageContainer />
      <div
        className="px-4 md:px-6 lg:px-16 xl:px-[134px] py-[50px] sm:pt-12 w-full sm:overflow-y-auto sm:h-[100vh]"
        style={{
          background: "linear-gradient(180deg, #1A1A1A 0%, #060606 100%)",
        }}>
        <div className="hidden sm:block lg:flex gap-8">
          {/* <div className="text-white text-base md:text-lg lg:text-2xl xl:text-[48px] font-medium">
            Choose 3 or more artists you like.
          </div> */}
          <div className="text-white text-[16px] md:text-[20px] lg:text-[28px] xl:text-[44px]">
            Choose 3 or more artists you like.
          </div>
          <div className="flex flex-col justify-center">
            <ProfileButton />
          </div>
        </div>
        <FilterContainer />
        <CardsContainer artists={artists} />
        <div className="my-3 md:my-6 lg:my-12 flex justify-center">
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              borderRadius: 30,
              borderColor: "#191919",
            }}
            onClick={loadMore}>
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
