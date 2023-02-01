import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

enum SocialType {
  facebook = "facebook",
  google = "google",
  apple = "apple",
}

interface CircleLinkProps {
  type: string;
}

export const CircleLink = (props: CircleLinkProps) => {
  return (
    <div className="cursor-pointer">
      {props.type == SocialType.facebook && (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_10_207)">
            <rect x="10" y="6" width="60" height="60" rx="30" fill="#232323" />
          </g>
          <g clipPath="url(#clip0_10_207)">
            <path
              d="M42.0881 47.9973V37.0522H45.7619L46.3119 32.7867H42.0881V30.0633C42.0881 28.8284 42.431 27.9868 44.2021 27.9868L46.4608 27.9857V24.1707C46.07 24.1189 44.7293 24.0028 43.1695 24.0028C39.9129 24.0028 37.6833 25.9906 37.6833 29.6411V32.7868H34V37.0523H37.6832V47.9974L42.0881 47.9973Z"
              fill="white"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_10_207"
              x="0"
              y="0"
              width="80"
              height="80"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_10_207"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_10_207"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_10_207">
              <rect
                width="12.4608"
                height="24"
                fill="white"
                transform="translate(34 24)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === SocialType.google && (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_10_199)">
            <rect x="10" y="6" width="60" height="60" rx="30" fill="#232323" />
          </g>
          <g clipPath="url(#clip0_10_199)">
            <path
              d="M51.9873 36.5097C51.9873 35.5035 51.9057 34.7692 51.729 34.0078H40.239V38.5493H46.9833C46.8474 39.6779 46.1132 41.3776 44.4814 42.5197L44.4585 42.6718L48.0915 45.4862L48.3431 45.5113C50.6547 43.3764 51.9873 40.2354 51.9873 36.5097"
              fill="white"
              fillOpacity="0.7"
            />
            <path
              d="M40.2392 48.4757C43.5434 48.4757 46.3172 47.3878 48.3434 45.5114L44.4816 42.5199C43.4482 43.2405 42.0612 43.7436 40.2392 43.7436C37.003 43.7436 34.2563 41.6089 33.2771 38.6582L33.1336 38.6704L29.356 41.5939L29.3066 41.7312C31.3191 45.7289 35.4528 48.4757 40.2392 48.4757Z"
              fill="white"
              fillOpacity="0.7"
            />
            <path
              d="M33.277 38.6582C33.0187 37.8967 32.8692 37.0808 32.8692 36.2378C32.8692 35.3947 33.0187 34.5789 33.2634 33.8174L33.2566 33.6553L29.4317 30.6848L29.3066 30.7443C28.4771 32.4033 28.0012 34.2662 28.0012 36.2378C28.0012 38.2094 28.4771 40.0723 29.3066 41.7312L33.277 38.6582"
              fill="white"
              fillOpacity="0.7"
            />
            <path
              d="M40.2391 28.7319C42.5371 28.7319 44.0871 29.7245 44.971 30.554L48.4248 27.1818C46.3036 25.2102 43.5433 24 40.2391 24C35.4527 24 31.3191 26.7467 29.3066 30.7443L33.2635 33.8174C34.2562 30.8667 37.0029 28.7319 40.2391 28.7319"
              fill="white"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_10_199"
              x="0"
              y="0"
              width="80"
              height="80"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_10_199"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_10_199"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_10_199">
              <rect
                width="24"
                height="24.56"
                fill="white"
                transform="translate(28 24)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === SocialType.apple && (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_10_212)">
            <rect x="10" y="6" width="60" height="60" rx="30" fill="#232323" />
          </g>
          <g clipPath="url(#clip0_10_212)">
            <path
              d="M47.5738 37.1713C47.5618 34.9741 48.5557 33.3157 50.5673 32.0943C49.4418 30.4838 47.7414 29.5977 45.4963 29.4241C43.3709 29.2565 41.0479 30.6634 40.1977 30.6634C39.2996 30.6634 37.2401 29.484 35.6236 29.484C32.2828 29.5379 28.7324 32.1482 28.7324 37.4587C28.7324 39.0273 29.0198 40.6478 29.5946 42.3202C30.3609 44.5175 33.1269 49.9058 36.0127 49.816C37.5215 49.7801 38.5872 48.7443 40.5509 48.7443C42.4548 48.7443 43.4427 49.816 45.1251 49.816C48.0348 49.7741 50.5374 44.8767 51.2678 42.6734C47.3642 40.8354 47.5738 37.2851 47.5738 37.1713V37.1713ZM44.1851 27.3406C45.8196 25.4008 45.6699 23.6346 45.622 23C44.1791 23.0838 42.5087 23.9819 41.5568 25.0895C40.509 26.2749 39.8924 27.7417 40.0241 29.3942C41.5867 29.5139 43.0116 28.7116 44.1851 27.3406V27.3406Z"
              fill="white"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_10_212"
              x="0"
              y="0"
              width="80"
              height="80"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_10_212"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_10_212"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_10_212">
              <rect
                width="24"
                height="26.9058"
                fill="white"
                transform="translate(28 23)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>

    // <div className="w-14 h-14 rounded-full bg-slate-400">
    // <IconButton
    //   className="rounded-full"
    //   color="primary"
    //   size="large"
    //   aria-label="upload picture"
    //   component="label">
    //   {props.type == SocialType.facebook && <FacebookIcon />}
    //   {props.type == SocialType.google && <GoogleIcon />}
    //   {props.type == SocialType.apple && <AppleIcon />}
    // </IconButton>
    // </div>
  );
};
