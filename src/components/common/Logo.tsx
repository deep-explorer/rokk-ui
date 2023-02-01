export const Logo = () => {
  return (
    <div className="absolute left-4 top-5 sm:left-12 sm:top-12 z-10">
      <div className="sm:hidden">
        <img src="/assets/logo-mobile.png" alt="logo" />
      </div>
      <div className="hidden sm:block">
        <img src="/assets/logo-desktop.png" alt="logo" />
      </div>
    </div>
  );
};
