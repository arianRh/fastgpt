import {
  Box,
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const AddComment = () => {
  const { palette } = useTheme();
  const [commentValue, setCommentValue] = useState({
    name: "",
    title: "",
    comment: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({ mode: "onSubmit" });

  const handleSendComment = () => {
    console.log(commentValue);
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
          pt: { md: "25px", xs: "10px" },
          pb: "10px",
          px: "10px",
          width: 500,
          bgcolor: "#D9D9D933",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography sx={{ textAlign: "center" }}>نظرسنجی</Typography>
        <Typography sx={{ mt: { md: "28px", xs: "16px" } }}>نام شما</Typography>
        <TextField
          sx={{
            width: "100%",

            "& .MuiInputBase-root": {
              height: 35,
              width: "100%",
              borderRadius: "30px",
              border: "2px solid #2FB14D",
              bgcolor: "#D9D9D933",
            },
            fieldset: {
              border: "unset",
            },
          }}
          {...register("name", {
            minLength: {
              value: 3,
              message: "حداقل 3 کاراکتر الزامیست",
            },
            onChange: (e) => {
              e.persist();
              setCommentValue((value: any) => {
                return {
                  ...value,
                  name: e.target.value,
                };
              });
              clearErrors("name");
            },
          })}
          helperText={
            errors.name?.message && (
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
                  <ErrorOutlineRoundedIcon sx={{ ml: 0.5, fontSize: "16px" }} />
                  {errors?.name?.message}
                </>
              </Typography>
            )
          }
          FormHelperTextProps={{ sx: { mx: 0 } }}
          error={Boolean(errors?.name?.message)}
        />
        <Typography sx={{ mt: "7px" }}>عنوان</Typography>
        <TextField
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              height: 35,
              width: "100%",
              borderRadius: "30px",
              border: "2px solid #2FB14D",
              bgcolor: "#D9D9D933",
            },
            fieldset: {
              border: "unset",
            },
          }}
          {...register("title", {
            minLength: {
              value: 7,
              message: "حداقل 7 کاراکتر الزامیست",
            },
            onChange: (e) => {
              e.persist();
              setCommentValue((value: any) => {
                return {
                  ...value,
                  title: e.target.value,
                };
              });
              clearErrors("title");
            },
          })}
          helperText={
            errors.title?.message && (
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
                  <ErrorOutlineRoundedIcon sx={{ ml: 0.5, fontSize: "16px" }} />
                  {errors?.title?.message}
                </>
              </Typography>
            )
          }
          FormHelperTextProps={{ sx: { mx: 0 } }}
          error={Boolean(errors?.title?.message)}
        />
        <Typography sx={{ mt: "7px" }}>نظر</Typography>
        <TextField
          multiline
          rows={6}
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              width: "100%",
              borderRadius: "30px",
              border: "2px solid #2FB14D",
              bgcolor: "#D9D9D933",
            },
            fieldset: {
              border: "unset",
            },
          }}
          {...register("comment", {
            minLength: {
              value: 17,
              message: "حداقل 17 کاراکتر الزامیست",
            },
            onChange: (e) => {
              e.persist();
              setCommentValue((value: any) => {
                return {
                  ...value,
                  comment: e.target.value,
                };
              });
              clearErrors("comment");
            },
          })}
          helperText={
            errors.comment?.message && (
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
                  <ErrorOutlineRoundedIcon sx={{ ml: 0.5, fontSize: "16px" }} />
                  {errors?.comment?.message}
                </>
              </Typography>
            )
          }
          FormHelperTextProps={{ sx: { mx: 0 } }}
          error={Boolean(errors?.comment?.message)}
        />
        <IconButton
          type="submit"
          onClick={handleSubmit(handleSendComment)}
          sx={{
            bgcolor: "#D9D9D933",
            borderRadius: "25px",
            color: "#000",
            border: `3px solid #FF890D`,
            height: "44px",
            py: "0px !important",
            mt: 2,
            width: "100%",
          }}
        >
          <Typography variant="button">ثبت نظر</Typography>
        </IconButton>
      </Box>
    </Grid>
  );
};
