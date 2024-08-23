import * as React from "react";
import { useRouter } from "next/router";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";

export const Footer = () => {
  const { pathname } = useRouter();

  return (
    <Grid
      container
      sx={{
        borderRadius: "124px 124px 10px 10px",
        border: "2px solid #20592C80",
        display: pathname === "/" || pathname === "/type" ? "none" : "flex",
        justifyContent: "center",
        zIndex: 998,
        height: "97px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <IconButton
          sx={{
            borderRadius: "25px",
            color: "#000",
            p: "0px !important",
          }}
        >
          <Typography variant="button">درباره</Typography>
        </IconButton>{" "}
        <Image
          src="/images/social/gmail.svg"
          width={35}
          height={35}
          alt="gmail"
        />
        <Image
          src="/images/social/instagram.svg"
          width={35}
          height={35}
          alt="gmail"
        />
      </Box>
    </Grid>
  );
};
