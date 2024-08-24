import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export const Header = () => {
  const { palette } = useTheme();
  const { pathname, push } = useRouter();

  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        px: "14px",
        position: "fixed",
        top: 0,
        pt: "5px",
        zIndex: 999,
      }}
    >
      <Grid
        item
        xs={5.5}
        sx={{
          border: `2px solid ${palette.warning.main}`,
          borderRadius: "40px 124px 20px 40px",
          height: 65,
          display: "flex",
          alignItems: "center",
          px: "15px",
        }}
      >
        <Image
          src="/images/navbar/login.svg"
          alt="logo"
          width={38}
          height={38}
        />
        <Typography ml={1}>ورود</Typography>
      </Grid>
      <Grid item xs={1} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src="/images/logo/logo.svg"
          alt="logo"
          width={100}
          height={100}
          onClick={() => {
            push("/");
          }}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
      </Grid>
      <Grid
        item
        xs={5.5}
        sx={{
          border: `2px solid ${palette.success.main}`,
          borderRadius: "124px 40px 40px 20px",
          height: 65,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          px: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <IconButton
            sx={{
              borderRadius: "25px",
              color: "#000",
              p: "0px !important",
            }}
            onClick={() => {
              push("/comments");
            }}
          >
            <Typography variant="button">نظرات</Typography>
          </IconButton>
          <IconButton
            sx={{
              borderRadius: "25px",
              color: "#000",
              p: "0px !important",
            }}
          >
            <Typography variant="button">درباره</Typography>
          </IconButton>
          <IconButton
            sx={{
              borderRadius: "25px",
              color: "#000",
              p: "0px !important",
            }}
          >
            <Typography variant="button">خبرنامه</Typography>
          </IconButton>
        </Box>
        <Box
          sx={{
            display:
              pathname === "/type" || pathname === "/description"
                ? "flex"
                : "none",
            gap: "10px",
          }}
        >
          <IconButton
            sx={{
              borderRadius: "25px",
              color: "#777777",
              height: "44px",
            }}
          >
            <Typography variant="button">امتحان رایگان</Typography>
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "#D9D9D959",
              borderRadius: "25px",
              color: "#3D8DEB",
              border: `1.5px solid #2FB14D`,
              height: "44px",
              py: "0px !important",
            }}
          >
            <Typography variant="button">تهیه اشتراک</Typography>
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};
