import { ProfileButton } from "../../components/Button/ProfileButton";

export const ImageContainer = () => {
  return (
    <div className="relative h-[300px] sm:h-[100vh] sm:min-w-[366px]">
      <div className="relative sm:hidden flex justify-center w-full h-full">
        <img
          className="sm:hidden w-[375px]"
          src="/assets/background-images/artist-mobile.jpg"
        />
        <div className="absolute right-3 top-3 md:right-5 md:top-10 lg:hidden z-10">
          <ProfileButton />
        </div>

        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 39.01%, #000000 83.54%)",
          }}
        />
      </div>
      <div className="relative">
        <img
          className="hidden w-full sm:block h-screen"
          src="/assets/background-images/artist-desktop.jpg"
        />
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            background:
              "linear-gradient(179.87deg, rgba(0, 0, 0, 0) 68.79%, #000000 91.02%)",
          }}
        />
      </div>
      <div className="absolute bottom-3 sm:bottom-8 left-4 sm:left-12 w-full text-white">
        <p className="sm:hidden text-center">
          Choose 3 or more artists you like.
        </p>
        <p className="hidden sm:block text-xl">
          Choose 3 or more
          <br /> artists you like.
        </p>
      </div>
    </div>
  );
};
