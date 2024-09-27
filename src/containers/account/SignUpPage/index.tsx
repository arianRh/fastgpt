import {
  Box,
  CircularProgress,
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
import { sendOTPCode, userSignUp } from "@/api/account";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import toast from "react-hot-toast";
import AlertNotif from "@/components/AlertNotif";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

export const SignUpPage = () => {
  const { palette } = useTheme();
  const { push } = useRouter();
  const [value, setValue] = useState(new Date());
  const [error, setError] = useState<any>([]);
  const [loadings, setLoadings] = useState({ sendOTP: false, signUp: false });

  const [signUpValue, setSignUpValue] = useState({
    first_name: "",
    last_name: "",
    password: "",
    phone_number: "",
    phone_code: "",
    referral_code: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({ mode: "onSubmit" });

  function handleChange(value: any) {
    setValue(new Date(value));
  }

  const handleSignUp = () => {
    setLoadings((prev) => ({ ...prev, signUp: true }));
    userSignUp(signUpValue)
      .then((res: any) => {
        toast.custom((t) => (
          <AlertNotif title={res.message} type="success" target={t} />
        ));
        setCookie("accessToken", res.access);
        push("/dashboard");
      })
      .catch((err: any) => {
        setError(err?.response?.data?.errors);
        toast.custom((t) => (
          <AlertNotif
            title={err?.response?.data?.message}
            type="error"
            target={t}
          />
        ));
      })
      .finally(() => setLoadings((prev) => ({ ...prev, signUp: false })));
  };

  const handleSendOTPCode = () => {
    if (signUpValue.phone_number) {
      // loadings.sendOTP = true;
      setLoadings((prev) => ({ ...prev, sendOTP: true }));
      sendOTPCode({ phone_number: signUpValue.phone_number })
        .then((res) => {
          toast.custom((t) => (
            <AlertNotif title={res.message} type="success" target={t} />
          ));
        })
        .catch((err) =>
          toast.custom((t) => (
            <AlertNotif
              title={err.response.data.error}
              type="error"
              target={t}
            />
          ))
        )
        .finally(() => setLoadings((prev) => ({ ...prev, sendOTP: false })));
    } else {
      toast.custom((t) => (
        <AlertNotif
          title={"شماره موبایلتان را وارد کنید"}
          type="error"
          target={t}
        />
      ));
    }
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
        pb: { xs: "42px", md: "32px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "105px",
      }}
    >
      <form onSubmit={handleSubmit(handleSignUp)}>
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
                {...register("first_name", {
                  required: "نام الزامیست",
                  onChange: (e) => {
                    e.persist();
                    setSignUpValue((value: any) => {
                      return {
                        ...value,
                        first_name: e.target.value,
                      };
                    });
                    clearErrors("first_name");
                  },
                })}
                helperText={
                  errors.first_name?.message && (
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
                        {errors?.first_name?.message}
                      </>
                    </Typography>
                  )
                }
                FormHelperTextProps={{ sx: { mx: 0 } }}
                error={Boolean(errors?.first_name?.message)}
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
                {...register("last_name", {
                  required: "نام خانوادگی الزامیست",
                  onChange: (e) => {
                    e.persist();
                    setSignUpValue((value: any) => {
                      return {
                        ...value,
                        last_name: e.target.value,
                      };
                    });
                    clearErrors("last_name");
                  },
                })}
                helperText={
                  errors.last_name?.message && (
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
                        {errors?.last_name?.message}
                      </>
                    </Typography>
                  )
                }
                FormHelperTextProps={{ sx: { mx: 0 } }}
                error={Boolean(errors?.last_name?.message)}
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
                {...register("phone_number", {
                  onChange: (e) => {
                    e.persist();
                    setSignUpValue((value: any) => {
                      return {
                        ...value,
                        phone_number: e.target.value,
                      };
                    });
                    clearErrors("phone_number");
                  },
                })}
                helperText={
                  error.phone_number ? (
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
                        {error.phone_number}
                      </>
                    </Typography>
                  ) : errors.phone_number?.message ? (
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
                        {errors?.phone_number?.message}
                      </>
                    </Typography>
                  ) : null
                }
                FormHelperTextProps={{ sx: { mx: 0 } }}
                error={Boolean(errors?.phone_number?.message)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {loadings.sendOTP ? (
                        <CircularProgress />
                      ) : (
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
                          onClick={handleSendOTPCode}
                        >
                          <Typography>ارسال کد</Typography>
                        </Box>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>کد تایید</Typography>
              <TextField
                placeholder="1234"
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
                {...register("phone_code", {
                  required: "شماره موبایلتان را تایید کنید",
                  onChange: (e) => {
                    e.persist();
                    setSignUpValue((value: any) => {
                      return {
                        ...value,
                        phone_code: e.target.value,
                      };
                    });
                    clearErrors("phone_code");
                  },
                })}
                helperText={
                  errors.phone_code?.message ? (
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
                        {errors?.phone_code?.message}
                      </>
                    </Typography>
                  ) : error.phone_code ? (
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
                        {error.phone_code}
                      </>
                    </Typography>
                  ) : null
                }
                FormHelperTextProps={{ sx: { mx: 0 } }}
                error={Boolean(errors?.phone_code?.message)}
              />
            </Grid>
            <Grid item md={12}>
              <Typography>رمز</Typography>
              <TextField
                type={showPassword ? "text" : "password"}
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
                {...register("password", {
                  required: "رمز الزامیست",
                  minLength: {
                    value: 6,
                    message: "حداقل 6 کاراکتر الزامیست",
                  },
                  onChange: (e) => {
                    e.persist();
                    setSignUpValue((value: any) => {
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
            </Grid>
            <Grid item md={12} xs={12}>
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
                {...register("referral_code", {
                  onChange: (e) => {
                    e.persist();
                    setSignUpValue((value: any) => {
                      return {
                        ...value,
                        referral_code: e.target.value,
                      };
                    });
                    clearErrors("referral_code");
                  },
                })}
                helperText={
                  errors.referral_code?.message && (
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
                        {errors?.referral_code?.message}
                      </>
                    </Typography>
                  )
                }
                FormHelperTextProps={{ sx: { mx: 0 } }}
                error={Boolean(errors?.referral_code?.message)}
              />
            </Grid>
          </Grid>
          <IconButton
            disabled={loadings.signUp}
            type="submit"
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
            {loadings.signUp ? (
              <CircularProgress />
            ) : (
              <Typography variant="button">ثبت نام</Typography>
            )}
          </IconButton>

          <Typography variant="button">قبلا ثبت نام کرده اید؟</Typography>
          {"  "}
          <Typography variant="button" component="a" href="/account/login">
            ورود
          </Typography>
        </Box>
      </form>
    </Grid>
  );
};
