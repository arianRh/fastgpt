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
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export const SignUpPage = () => {
  const { palette } = useTheme();
  const [value, setValue] = useState(new Date());

  const [signUpValue, setSignUpValue] = useState({
    fname: "",
    lname: "",
    birthDate: "",
    city: "",
    number: "",
    email: "",
    identification: "number",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({ mode: "onSubmit" });

  const handleSendComment = () => {
    console.log(signUpValue);
  };

  function handleChange(value: any) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    setValue(new Date(value));
  }

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
        }}
      >
        <Typography sx={{ textAlign: "center" }}>فرم ثبت نام</Typography>
        <Grid container columnSpacing="20px" rowSpacing="10px" mt="0px">
          <Grid item md={6} xs={12}>
            <Typography>نام</Typography>
            <TextField
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: 45,
                  width: "100%",
                  borderRadius: "30px",
                  border: "1px solid #2FB14D",
                  bgcolor: "#D9D9D933",
                },
                fieldset: {
                  border: "unset",
                },
              }}
              {...register("fname", {
                minLength: {
                  value: 3,
                  message: "حداقل 3 کاراکتر الزامیست",
                },
                onChange: (e) => {
                  e.persist();
                  setSignUpValue((value: any) => {
                    return {
                      ...value,
                      fname: e.target.value,
                    };
                  });
                  clearErrors("fname");
                },
              })}
              helperText={
                errors.fname?.message && (
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
                      {errors?.fname?.message}
                    </>
                  </Typography>
                )
              }
              FormHelperTextProps={{ sx: { mx: 0 } }}
              error={Boolean(errors?.fname?.message)}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography>نام خانوادگی</Typography>
            <TextField
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: 45,
                  width: "100%",
                  borderRadius: "30px",
                  border: "1px solid #2FB14D",
                  bgcolor: "#D9D9D933",
                },
                fieldset: {
                  border: "unset",
                },
              }}
              {...register("lname", {
                minLength: {
                  value: 3,
                  message: "حداقل 3 کاراکتر الزامیست",
                },
                onChange: (e) => {
                  e.persist();
                  setSignUpValue((value: any) => {
                    return {
                      ...value,
                      lname: e.target.value,
                    };
                  });
                  clearErrors("lname");
                },
              })}
              helperText={
                errors.lname?.message && (
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
                      {errors?.lname?.message}
                    </>
                  </Typography>
                )
              }
              FormHelperTextProps={{ sx: { mx: 0 } }}
              error={Boolean(errors?.lname?.message)}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              ".rmdp-container": {
                // width: "100%",
                height: "35px !important",
                width: "100%",
              },
              ".rmdp-input": {
                width: { md: "95%", xs: "97%" },

                height: "37.8px !important",
                // maxHeight: "36px !important",
                // minHeight: "35px !important",
              },
            }}
          >
            <Typography>تاریخ تولد</Typography>
            <DatePicker
              value={value}
              onChange={handleChange}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              style={{
                fontSize: "17.5px",

                borderRadius: "30px",
                border: "1px solid #2FB14D",
                backgroundColor: "#D9D9D933",
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography>استان مورد سکونت</Typography>
            <TextField
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: 45,
                  width: "100%",
                  borderRadius: "30px",
                  border: "1px solid #2FB14D",
                  bgcolor: "#D9D9D933",
                },
                fieldset: {
                  border: "unset",
                },
              }}
              {...register("city", {
                required: "لطفا استان مورد سکونتتان را وارد کنید",
                onChange: (e) => {
                  e.persist();
                  setSignUpValue((value: any) => {
                    return {
                      ...value,
                      city: e.target.value,
                    };
                  });
                  clearErrors("city");
                },
              })}
              helperText={
                errors.city?.message && (
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
                      {errors?.city?.message}
                    </>
                  </Typography>
                )
              }
              FormHelperTextProps={{ sx: { mx: 0 } }}
              error={Boolean(errors?.city?.message)}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography>شماره موبایل</Typography>
            <TextField
              placeholder="0000 - 000 - 0000"
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: 45,
                  width: "100%",
                  borderRadius: "30px",
                  border: "1px solid #2FB14D",
                  bgcolor: "#D9D9D933",
                  overflow: "hidden",
                },
                fieldset: {
                  border: "unset",
                },
              }}
              {...register("number", {
                onChange: (e) => {
                  e.persist();
                  setSignUpValue((value: any) => {
                    return {
                      ...value,
                      number: e.target.value,
                    };
                  });
                  clearErrors("number");
                },
              })}
              helperText={
                errors.number?.message && (
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
                      {errors?.number?.message}
                    </>
                  </Typography>
                )
              }
              FormHelperTextProps={{ sx: { mx: 0 } }}
              error={Boolean(errors?.number?.message)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {/* <Icon
                      iconSet="Event-Filled"
                      sx={{
                        fontSize: "20px",
                        color: palette.neutral[500],
                      }}
                    /> */}
                    <Box
                      sx={{
                        bgcolor: "#D9D9D9",
                        height: 45,
                        display: "flex",
                        px: 1,
                        ml: -1,
                        alignItems: "center",
                        color: "black",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Typography> ارسال کد</Typography>
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography>ایمیل</Typography>
            <TextField
              placeholder="abc@gmail.com"
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: 45,
                  width: "100%",
                  borderRadius: "30px",
                  border: "1px solid #2FB14D",
                  bgcolor: "#D9D9D933",
                  overflow: "hidden",
                },
                fieldset: {
                  border: "unset",
                },
              }}
              {...register("email", {
                onChange: (e) => {
                  e.persist();
                  setSignUpValue((value: any) => {
                    return {
                      ...value,
                      email: e.target.value,
                    };
                  });
                  clearErrors("email");
                },
              })}
              helperText={
                errors.email?.message && (
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
                      {errors?.email?.message}
                    </>
                  </Typography>
                )
              }
              FormHelperTextProps={{ sx: { mx: 0 } }}
              error={Boolean(errors?.email?.message)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {/* <Icon
                      iconSet="Event-Filled"
                      sx={{
                        fontSize: "20px",
                        color: palette.neutral[500],
                      }}
                    /> */}
                    <Box
                      sx={{
                        bgcolor: "#D9D9D9",
                        height: 45,
                        display: "flex",
                        px: 1,
                        ml: -1,
                        alignItems: "center",
                        color: "black",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Typography> ارسال کد</Typography>
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography>کد معرف(شماره موبایل)</Typography>
            <TextField
              placeholder="0000 - 000 - 0000"
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: 45,
                  width: "100%",
                  borderRadius: "30px",
                  border: "3px solid #2FB14D",
                  outline: "3px solid #FF890D",
                  bgcolor: "#D9D9D933",
                  mt: "6px",
                },
                fieldset: {
                  border: "unset",
                },
              }}
              {...register("identification", {
                onChange: (e) => {
                  e.persist();
                  setSignUpValue((value: any) => {
                    return {
                      ...value,
                      identification: e.target.value,
                    };
                  });
                  clearErrors("identification");
                },
              })}
              helperText={
                errors.identification?.message && (
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
                      {errors?.identification?.message}
                    </>
                  </Typography>
                )
              }
              FormHelperTextProps={{ sx: { mx: 0 } }}
              error={Boolean(errors?.identification?.message)}
            />
          </Grid>
        </Grid>
        <IconButton
          type="submit"
          onClick={handleSubmit(handleSendComment)}
          sx={{
            bgcolor: "#FF890D",
            borderRadius: "25px",
            color: "#000",
            border: `3px solid #3D8DEB`,
            height: "44px",
            py: "0px !important",
            mt: 2,
            width: "100%",
            boxShadow: "0px 4px 4px 0px #00000040",
            mb: 1,
          }}
        >
          <Typography variant="button">ثبت نام</Typography>
        </IconButton>

        <Typography variant="button">قبلا ثبت نام کرده اید؟</Typography>
        {"  "}
        <Typography variant="button" component="a" href="/account/login">
          ورود
        </Typography>
      </Box>
    </Grid>
  );
};
