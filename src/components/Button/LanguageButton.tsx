import TranslateIcon from "@mui/icons-material/Translate";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import { Menu, MenuItem, Select, TextField } from "@mui/material";

const formStyle = makeStyles({
  menu: {
    height: 50,
  },
});

export const LanguageButton = () => {
  const classes = formStyle();
  const [selectedLanguage, setLanguage] = useState("English");

  return (
    <div className="flex">
      <div className="flex flex-col justify-center">
        <TranslateIcon />
      </div>
      <Select
        variant="outlined"
        required
        fullWidth
        sx={{
          borderRadius: "50px",
          border: "none",
          color: "#FFFFFFB2",
          width: 120,
          ":focus": {
            border: "none",
          },
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
        value={selectedLanguage}
        onChange={(e) => setLanguage(e.target.value)}>
        {["English", "German"].map((val, index) => {
          return (
            <MenuItem
              key={index}
              value={val}
              sx={{
                backgroundColor: "#161616",
                color: "#8f8f8f",
                outline: "none",
                "& .MuiSvgIcon-root": {
                  color: "#8f8f8f",
                },
              }}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};
