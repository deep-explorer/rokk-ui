import { MenuItem, Select } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export const ProfileButton = () => {
  const { user, logout } = useAuth0();

  return (
    <Select
      variant="outlined"
      required
      sx={{
        borderRadius: "50px",
        border: "none",
        color: "white",
        maxWidth: 200,
        height: 50,
        fontWeight: 500,
        fontSize: "",
        "& .MuiSvgIcon-root": {
          color: "white",
        },
        ":focus": {
          border: "none",
        },
        // marginTop: "15px",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
      }}
      inputProps={{
        color: "white",
      }}
      fullWidth
      value={user?.name}>
      <MenuItem
        sx={{
          backgroundColor: "#161616",
          color: "white",
          outline: "none",
        }}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }>
        Logout
      </MenuItem>
      <MenuItem
        value={user?.name}
        sx={{
          backgroundColor: "#161616",
          color: "#8f8f8f",
          outline: "none",
          display: "none",
        }}>
        {user?.name}
      </MenuItem>
    </Select>
  );
};
