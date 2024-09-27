import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getComments } from "@/api/comment";
import Image from "next/image";
import { LoadingPage } from "@/components/LoadingPage";

export const CommentsPage = () => {
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  const [comments, setComments] = useState<
    {
      first_name: string;
      last_name: string;
      title: string;
      comment_text: string;
    }[]
  >([]);

  useEffect(() => {
    setLoading(true);
    getComments()
      .then((res) => {
        setComments(res);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <Grid
      container
      // px={2}
      sx={{
        height: "calc(100vh - 165px)",
        overflowY: "overlay",
        overflowX: "hidden",
        px: 2,
        mt: "105px",

        pb: { xs: "42px", md: 5 },
      }}
      rowSpacing="80px"
    >
      <Grid
        item
        md={3}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // mt: 15,
        }}
      >
        <Box
          sx={{
            borderRadius: "15px",
            border: "2px solid #2FB14D",
            height: "200px",
            width: "250px",
            position: "relative",
            px: 1,
            backdropFilter: "blur(8px)",
          }}
        >
          <Box sx={{ width: "100%", textAlign: "center", mt: 5 }}>
            <Typography>نظر خود را اضافه کنید</Typography>
            <IconButton
              onClick={() => push("/comments/add")}
              sx={{
                borderRadius: "8px",
                color: "#000",
                mt: 5,
              }}
            >
              <Typography>اضافه کردن</Typography>
            </IconButton>
          </Box>
        </Box>
      </Grid>
      {comments?.map((item, index) => (
        <Grid
          key={index}
          item
          md={3}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // mt: 15,
          }}
        >
          <Box
            sx={{
              borderRadius: "15px",
              border: "2px solid #2FB14D",
              height: "200px",
              width: "250px",
              position: "relative",
              px: 1,
              backdropFilter: "blur(8px)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bgcolor: "#FF890D80",
                border: "1px solid #2FB14D",
                borderRadius: "100%",
                minWidth: "100px",
                maxWidth: "100px",
                height: "100px",
                top: -65,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image width={48} height={63} src="/images/user.svg" alt="user" />
            </Box>
            <Box sx={{ width: "100%", textAlign: "center", mt: 5 }}>
              <Typography>
                {item.first_name} {item.last_name}
              </Typography>
            </Box>
            <Typography mt={2}>عنوان : {item.title}</Typography>
            <Typography
              sx={{
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
                lineHeight: "26px",
                mt: "4px",
                overflowWrap: "break-word",
                whiteSpace: "pre-line",
                WebkitBoxOrient: "vertical",
              }}
            >
              نظر : {item.comment_text}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
