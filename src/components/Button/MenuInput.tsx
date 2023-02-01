import React, { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import { MenuItem, Select } from "@mui/material";
import { months } from "../../utils/constants";

interface PropTypes extends React.HtmlHTMLAttributes<unknown> {
  field: ControllerRenderProps<
    {
      email: string;
      name: string;
      password: string;
      month: number;
      date: number;
      year: number;
      gender: string;
      acceptTermsConditions: boolean;
    },
    "month"
  >;
}

const formStyle = makeStyles({
  menu: {
    height: 50,
    backgroundColor: "#2d2d2d",
    width: 180,
    borderRadius: "50px",
  },
});

export default function MenuInput({ field }: PropTypes): JSX.Element {
  const [month, setMonth] = useState(1);
  const classes = formStyle();

  return (
    <>
      <Select
        {...field}
        variant="outlined"
        required
        fullWidth
        value={month}
        sx={{
          borderRadius: "50px",
          color: "#8f8f8f",
          minWidth: 60,
        }}
        className={classes.menu}
        inputProps={{
          style: {
            borderRadius: 50,
            color: "#8f8f8f",
          },
        }}
        onChange={(e) => {
          setMonth(Number(e.target.value));
          field.onChange(e);
        }}>
        {months.map((val, index) => {
          return (
            <MenuItem
              key={index}
              value={index + 1}
              style={{
                backgroundColor: "#161616",
                color: "#8f8f8f",
              }}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
