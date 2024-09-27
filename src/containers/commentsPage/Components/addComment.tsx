import {
  Box,
  CircularProgress,
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
import { sendComment } from "@/api/comment";
import AlertNotif from "@/components/AlertNotif";
import toast from "react-hot-toast";

export const AddComment = () => {
  const { palette } = useTheme();

  const { push } = useRouter();

  const [commentValue, setCommentValue] = useState({
    name: "",
    title: "",
    comment_text: "",
  });
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({ mode: "onSubmit" });

  const handleSendComment = () => {
    setLoading(true);
    sendComment(commentValue)
      .then((res) => {
        toast.custom((t) => (
          <AlertNotif title={res.message} type="success" target={t} />
        ));
        push("/comments");
      })
      .catch((err) => {
        toast.custom((t) => (
          <AlertNotif
            title={err?.response?.data?.detail}
            type="error"
            target={t}
          />
        ));
      })
      .finally(() => {
        setLoading(false);
      });
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
      <form onSubmit={handleSubmit(handleSendComment)}>
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
              required: "عنوان الزامیست",
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
                    <ErrorOutlineRoundedIcon
                      sx={{ ml: 0.5, fontSize: "16px" }}
                    />
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
            {...register("comment_text", {
              required: "نظر الزامیست",
              onChange: (e) => {
                e.persist();
                setCommentValue((value: any) => {
                  return {
                    ...value,
                    comment_text: e.target.value,
                  };
                });
                clearErrors("comment_text");
              },
            })}
            helperText={
              errors.comment_text?.message && (
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
                    {errors?.comment_text?.message}
                  </>
                </Typography>
              )
            }
            FormHelperTextProps={{ sx: { mx: 0 } }}
            error={Boolean(errors?.comment_text?.message)}
          />
          <IconButton
            type="submit"
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
            {loading ? (
              <CircularProgress />
            ) : (
              <Typography variant="button">ثبت نظر</Typography>
            )}
          </IconButton>
        </Box>
      </form>
    </Grid>
  );
};
