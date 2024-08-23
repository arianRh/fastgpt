import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import Image from "next/image";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `58px`,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Header = () => {
  const { palette } = useTheme();
  const { push } = useRouter();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState<string | undefined>("/");

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        pt: "5px",
        px: "14px",
      }}
    >
      <Grid
        item
        xs={5.5}
        sx={{
          border: `2px solid ${palette.warning.main}`,
          borderRadius: "40px 124px 20px 40px",
          height: 65,
        }}
      ></Grid>
      <Grid item xs={1} sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/images/logo/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </Grid>
      <Grid
        item
        xs={5.5}
        sx={{
          border: `2px solid ${palette.success.main}`,
          borderRadius: "124px 40px 40px 20px",
          height: 65,
        }}
      ></Grid>
    </Grid>
  );
};
