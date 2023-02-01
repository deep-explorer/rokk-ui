import { useAuth0 } from "@auth0/auth0-react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup } from "../../apis/auth";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useSnackbar } from "notistack";

import { Checkbox, FormHelperText } from "@mui/material";

import _ from "lodash";
import { CircleLink } from "../../components/SocialLink/CircleLink";
import MenuInput from "../../components/Button/MenuInput";
import { ValidationInput } from "../../components/Input/ValidationInput";
import FullButton from "../../components/Button/FullButton";

export type UserData = {
  email: string;
  name: string;
  password: string;
  month: number;
  date: number;
  year: number;
  gender: string;
};

const initUserData = {
  email: "",
  name: "",
  password: "",
  month: 1,
  date: 0,
  year: 0,
  gender: "male",
  acceptTermsConditions: false,
};

const schema = yup.object().shape({
  name: yup.string().required("You must enter your name"),
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Password should be 8 chars minimum.")
    .matches(RegExp("(.*[a-z].*)"), "Lowercase")
    .matches(RegExp("(.*[A-Z].*)"), "Uppercase")
    .matches(RegExp("(.*\\d.*)"), "Number")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Special"),
  month: yup.number(),
  date: yup.number().min(1, "Date > 1").max(31, "Date < 31").required(),
  year: yup.number().min(1, "Year > 1").max(2050, "Year < 2050").required(),
  gender: yup.string(),
  acceptTermsConditions: yup
    .boolean()
    .required()
    .oneOf([true], "The terms and conditions must be accepted."),
});

export const InputContainer = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { enqueueSnackbar } = useSnackbar();

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: initUserData,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = async (data: UserData) => {
    signup(data)
      .then((res) => {
        enqueueSnackbar("Success", { variant: "success" });
      })
      .catch((e) => {
        enqueueSnackbar("Failed", { variant: "warning" });
      });
  };

  return (
    <div className="px-4 sm:px-10 xl:px-[74px] pt-6 sm:pt-[58px] z-[1] relative sm:h-[100vh] w-full sm:w-[900px] sm:overflow-y-auto">
      <form
        name="registerForm"
        noValidate
        className="xl:w-[400px]"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="flex sm:text-2xl text-[18px] font-medium leading-[27px] mb-6">
            <span className="text-white">Sign up for free to </span>
            <span className="text-[#FF8303] ml-2">Start Rocking.</span>
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <ValidationInput
                {...field}
                placeholder="Your Email"
                type="email"
                error={!!errors.email}
                helperText={errors?.email?.message?.toString()}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <ValidationInput
                {...field}
                placeholder="Name"
                type="name"
                error={!!errors.name}
                helperText={errors?.name?.message?.toString()}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <ValidationInput
                {...field}
                placeholder="Create a Password"
                type="password"
                error={!!errors.password}
                helperText={errors?.password?.message?.toString()}
              />
            )}
          />
          <div>
            <div className="mb-2">What's your date of birth?</div>
            <div className="flex gap-2">
              <Controller
                name="month"
                control={control}
                render={({ field }) => <MenuInput field={field}></MenuInput>}
              />
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <ValidationInput
                    {...field}
                    name="date"
                    type="text"
                    placeholder="Date"
                    error={!!errors.date}
                    helperText="invalid date"
                  />
                )}
              />
              <Controller
                name="year"
                control={control}
                render={({ field }) => (
                  <ValidationInput
                    {...field}
                    name="year"
                    placeholder="Year"
                    error={!!errors.year}
                    helperText="invalid year"
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <span className="mb-2">What's your Gender</span>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="male"
                  name="radio-buttons-group">
                  <div className="flex justify-between gap-2">
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          sx={{
                            color: "#ffffffb2",
                            "&.Mui-checked": {
                              color: "#FF8303",
                            },
                          }}
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio
                          sx={{
                            color: "#ffffffb2",
                            "&.Mui-checked": {
                              color: "#FF8303",
                            },
                          }}
                        />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      value="nonBinary"
                      control={
                        <Radio
                          sx={{
                            color: "#ffffffb2",
                            "&.Mui-checked": {
                              color: "#FF8303",
                            },
                          }}
                        />
                      }
                      label="Non-binary"
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </div>
          <FormControlLabel
            // label={Subscribe to Newsletter}
            label={<div style={{ fontSize: 12 }}>Subscribe to Newsletter</div>}
            control={
              <Checkbox
                sx={{
                  color: "#ffffffb2",
                  "&.Mui-checked": {
                    color: "#FF8303",
                  },
                }}
              />
            }
          />
          <div style={{ height: 75, marginTop: -10 }}>
            <Controller
              name="acceptTermsConditions"
              control={control}
              render={({ field }) => (
                <div className="flex justify-between gap-2 h-16">
                  <FormControl
                    className="items-center"
                    error={!!errors.acceptTermsConditions}>
                    <FormControlLabel
                      // label="By clicking on sign-up, you agree to Rokk Terms and Conditions of Use."
                      label={
                        <div style={{ fontSize: 12 }}>
                          By clicking on sign-up, you agree to Rokk{" "}
                          <u>Terms and Conditions of Use</u>.
                        </div>
                      }
                      control={
                        <Checkbox
                          color="primary"
                          sx={{
                            color: "#ffffffb2",
                            "&.Mui-checked": {
                              color: "#FF8303",
                            },
                          }}
                          {...field}
                        />
                      }
                    />
                    <FormHelperText>
                      {errors?.acceptTermsConditions?.message?.toString()}
                    </FormHelperText>
                  </FormControl>
                </div>
              )}
            />
          </div>
        </div>
        {/* <input type="submit" /> */}
        <FullButton type="submit">SIGN UP</FullButton>

        <hr className="border-gray-700 border-[1px] my-6" />
        <div className="flex">
          <CircleLink type="facebook" />
          <CircleLink type="google" />
          <CircleLink type="apple" />
        </div>
        <div className="flex my-10 text-lg">
          <div className="font-[400]">Have an account?</div>
          <div
            onClick={() => {
              console.log(isAuthenticated);
              loginWithRedirect({
                appState: {
                  returnTo: window.location.origin,
                },
              });
            }}
            className="text-primary ml-2 cursor-pointer">
            Log In
          </div>
        </div>
      </form>
    </div>
  );
};
