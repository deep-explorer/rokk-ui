import { useAuth0 } from "@auth0/auth0-react";
import { Logo } from "../components/common/Logo";
import SignupPage from "./SignupPage";
import ArtistPage from "./ArtistPage";
import { CookiesProvider, useCookies } from "react-cookie";

import axios from "axios";
import { useEffect } from "react";
import { coreAgency } from "../apis/instances";

export default () => {
  const { isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  const [cookies, setCookie] = useCookies(["id_token"]);
  if (isAuthenticated) {
    coreAgency.defaults.headers.common["Authorization"] =
      "Bearer " + cookies.id_token;
  }
  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((res) => {
        setCookie("id_token", res?.__raw);
      });
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-gradient-to-t from-[#1a1a1a] to-[#060606] min-h-[100vh]">
      {isLoading ? (
        <h1>Loading ... </h1>
      ) : (
        <>
          <Logo />
          {isAuthenticated ? (
            <>
              <ArtistPage />
            </>
          ) : (
            <SignupPage />
          )}
        </>
      )}
    </div>
  );
};
