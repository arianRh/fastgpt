import { Box, CircularProgress, Typography } from "@mui/material";

export const LoadingPage = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 205px)",
        overflowY: "overlay",
        overflowX: "hidden",
        px: 2,
        mt: "105px",
        pb: { xs: "42px", md: 5 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
      <Typography mr={2}>درحال بارگیری</Typography>
    </Box>
  );
};
