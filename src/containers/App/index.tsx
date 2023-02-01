import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { CookiesProvider, useCookies } from "react-cookie";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

import axios from "axios";
import Layout from "../Layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SignupPage />,
//   },
//   {
//     path: "/auth/signup",
//     element: <SignupPage />,
//   },
//   {
//     path: "/artist",
//     element: <AuthenticationGuard component={ArtistPage} />,
//   },
// ]);

export default () => {
  const [cookies, setCookie] = useCookies(["user"]);
  if (cookies.user) {
    axios.defaults.headers.common["Authorization"] = cookies.user;
  }

  return process.env.REACT_APP_AUTH0_DOMAIN &&
    process.env.REACT_APP_AUTH0_CLIENT_ID ? (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: `${window.location.origin}`,
      }}>
      <CookiesProvider>
        <SnackbarProvider maxSnack={3}>
          <Layout />
        </SnackbarProvider>
      </CookiesProvider>
    </Auth0Provider>
  ) : (
    <p>Auth0 credential is required.</p>
  );
};
