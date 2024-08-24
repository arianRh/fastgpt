import { Box, Button, Grid, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useRouter } from "next/router";

export const CommentsPage = () => {
  const { push } = useRouter();

  return (
    <Grid
      container
      px={2}
      sx={{
        height: "calc(100vh - 60px)",
        overflowY: "overlay",
        overflowX: "hidden",

        pt: { md: "95px", xs: "65px" },
        pb: { xs: "42px", md: 0 },
      }}
    >
      asdf
    </Grid>
  );
};
