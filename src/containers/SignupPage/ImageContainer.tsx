import { LanguageButton } from "../../components/Button/LanguageButton";

export const ImageContainer = () => {
  return (
    <div className="relative w-full">
      <div className="sm:h-[100vh] h-[300px] overflow-hidden">
        <img
          className="sm:hidden w-screen h-[100%] relative object-center object-cover -z-0"
          src="/assets/background-images/signup-mobile - Copy.jpg"
        />
        <img
          className="hidden sm:block h-screen w-full object-cover object-center"
          src="/assets/background-images/signup-desktop - Copy.jpg"
        />
        <div className="absolute right-3 top-3 md:right-5 md:top-10 lg:hidden">
          <LanguageButton />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-[100%] px-4 sm:px-[50px]">
        <p className="text-[18px] sm:text-[20px] lg:text-[24px] xs:text-[14px] w-[90%] font-normal text-[#FFFFFFD9]">
          For most passionate music fans and the artists they love
        </p>
        <div className="text-xs sm:text-sm my-4 sm:my-10 flex justify-between">
          <div className="flex flex-col justify-center">
            <div>
              <span className="cursor-pointer">Terms & Conditions</span>
              <span className="cursor-pointer ml-8 sm:ml-10">
                Privacy Policy
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <LanguageButton />
          </div>
        </div>
      </div>
    </div>
  );
};
