import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";

export const LoginPage = () => {
  const { palette } = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [loginValue, setLoginValue] = useState({
    userName: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({ mode: "onSubmit" });

  const handleSendComment = () => {
    console.log(loginValue);
  };

  return (
    <Grid
      container
      px={2}
      sx={{
        height: "calc(100vh - 165px)",
        overflowY: "overlay",
        overflowX: "hidden",
        pt: { md: "0px", xs: "0px" },
        pb: { xs: "42px", md: "0px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "105px",
      }}
    >
      <Box
        sx={{
          border: "2px solid #2FB14D",
          borderRadius: "30px",
          pt: { md: "7px", xs: "10px" },
          pb: "10px",
          px: "10px",
          width: 500,
          bgcolor: "#D9D9D933",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ textAlign: "center" }}>فرم ورود</Typography>

        <Box sx={{ width: "275px", mt: 1 }}>
          <Box>
            <Typography>ایمیل یا شماره موبایل</Typography>
            <TextField
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: 55,
                  width: "100%",
                  borderRadius: "30px",
                  border: "1px solid #2FB14D",
                  bgcolor: "#D9D9D933",
                },
                fieldset: {
                  border: "unset",
                },
              }}
              {...register("userName", {
                minLength: {
                  value: 3,
                  message: "حداقل 3 کاراکتر الزامیست",
                },
                onChange: (e) => {
                  e.persist();
                  setLoginValue((value: any) => {
                    return {
                      ...value,
                      userName: e.target.value,
                    };
                  });
                  clearErrors("userName");
                },
              })}
              helperText={
                errors.userName?.message && (
                  <Typography
                    component="span"
                    variant="label"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: palette.error.main,
                    }}
                  >
                    <>
                      <ErrorOutlineRoundedIcon
                        sx={{ ml: 0.5, fontSize: "16px" }}
                      />
                      {errors?.userName?.message}
                    </>
                  </Typography>
                )
              }
              FormHelperTextProps={{ sx: { mx: 0 } }}
              error={Boolean(errors?.userName?.message)}
            />
          </Box>
          <Box mt={0.5}>
            <Typography>رمز</Typography>
            <TextField
              // type={showPassword ? "text" : "password"}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "&.Mui-focused": {
                  backgroundColor: "red",

                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    backgroundColor: "red",
                  },
                },
                width: "100%",
                "& .MuiInputBase-root": {
                  height: 55,
                  width: "100%",
                  borderRadius: "30px",
                  border: "1px solid #FF890D",
                  bgcolor: "#D9D9D933",
                },
                fieldset: {
                  border: "unset",
                },
                input: {
                  p: 0,
                },
                MuiInput: {
                  input: {
                    "&::placeholder": {
                      color: palette.neutral[500],
                    },
                    bgcolor: "red",
                  },
                },
              }}
              {...register("password", {
                minLength: {
                  value: 3,
                  message: "حداقل 3 کاراکتر الزامیست",
                },
                onChange: (e) => {
                  e.persist();
                  setLoginValue((value: any) => {
                    return {
                      ...value,
                      password: e.target.value,
                    };
                  });
                  clearErrors("password");
                },
              })}
              helperText={
                errors.password?.message && (
                  <Typography
                    component="span"
                    variant="label"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: palette.error.main,
                    }}
                  >
                    <>
                      <ErrorOutlineRoundedIcon
                        sx={{ ml: 0.5, fontSize: "16px" }}
                      />
                      {errors?.password?.message}
                    </>
                  </Typography>
                )
              }
              FormHelperTextProps={{ sx: { mx: 0 } }}
              error={Boolean(errors?.password?.message)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              gap: 1,
              mt: 2,
            }}
          >
            <IconButton
              type="submit"
              onClick={handleSubmit(handleSendComment)}
              sx={{
                bgcolor: "#D9D9D933",
                borderRadius: { md: "23px 23px 23px 5px", xs: "23px" },
                color: "#000",
                border: `1px solid #2FB14D`,
                height: "44px",
                py: "0px !important",
                width: { md: "130px", xs: "100%" },
                boxShadow: "0px 4px 4px 0px #00000040",
                mb: 1,
              }}
            >
              <Typography variant="button">ورود</Typography>
            </IconButton>
            <IconButton
              type="submit"
              onClick={handleSubmit(handleSendComment)}
              sx={{
                bgcolor: "#D9D9D933",
                borderRadius: { md: "23px 23px 5px 23px", xs: "23px" },
                color: "#000",
                border: `1px solid #FF890D`,
                height: "44px",
                py: "0px !important",
                width: { md: "130px", xs: "100%" },
                boxShadow: "0px 4px 4px 0px #00000040",
                mb: 1,
              }}
            >
              <Typography variant="button">رمز یکبار مصرف</Typography>
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography variant="button">هنوز ثبت نام نکرده اید؟</Typography>
          <Typography variant="button" component="a" href="/account/sign-up">
            ثبت نام
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
