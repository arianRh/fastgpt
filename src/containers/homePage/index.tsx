import Head from "next/head";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

export const HomePage = () => {
  const { palette } = useTheme();
  return (
    <Grid container px={2} sx={{ mt: "100px" }}>
      <Grid md={5}>
        <Typography variant="h3">زندگی روزمره را با</Typography>
        <Typography variant="h3" mr={20}>
          <span style={{ color: "#2FB14D" }}>هوش</span>{" "}
          <span style={{ color: "#FF890D" }}>سریع</span> متحول کنید.
        </Typography>
        <Box sx={{ mt: "33px", mr: "32px", gap: 2, display: "flex" }}>
          <Button
            sx={{
              bgcolor: "#D9D9D959",
              borderRadius: "25px",
              px: "25px",
              py: "10px",
              color: "#3D8DEB",
            }}
          >
            <Typography variant="button">تهیه اشتراک</Typography>
          </Button>
          <Button
            sx={{
              bgcolor: "#D9D9D959",
              borderRadius: "25px",
              px: "25px",
              py: "10px",
              color: "#3D8DEB",
            }}
          >
            <Typography variant="button">امتحان رایگان</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item md={2}></Grid>
      <Grid md={5}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5">
            با <span style={{ color: "#2FB14D" }}>هوش</span>{" "}
            <span style={{ color: "#FF890D" }}>سریع</span> در کارهای روزمره و
            پیچیده، به طوری که با خود بگوئید هیچ وقت قبل از این، عملکرد بی نظیری
            را تجربه کنید. با ما همراه شوید و تحولی بزرگ در زندگی خود ایجاد
            کنید.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
