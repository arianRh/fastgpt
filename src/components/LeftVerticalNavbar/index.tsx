import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useRouter } from "next/router";
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

const items = [
  { src: "/images/navbar/item1.svg" },
  { src: "/images/navbar/item2.svg" },
  { src: "/images/navbar/item3.svg" },
  { src: "/images/navbar/item4.svg" },
  { src: "/images/navbar/item5.svg" },
];

export const LeftVerticalNavbar = () => {
  const { palette } = useTheme();
  const { push } = useRouter();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState<string | undefined>("/");

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: { md: "flex", xs: "none" },
        alignItems: "center",
      }}
    >
      <Drawer
        variant="permanent"
        open={open}
        anchor="left"
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "#D9D9D933",
            height: "calc(100vh - 165px)",
            borderRadius: "20px",
            mt: 12,
            ml: 2,
            border: "2px solid #FF890D80",
          },
        }}
      >
        {/* <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ width: "43px", height: "43px", color: "white" }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> */}
        <Divider />
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            // gap: "40px",
          }}
        >
          {items.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  minWidth: 50,
                  maxWidth: 50,
                  maxHeight: 50,
                  minHeight: 50,
                  bgcolor: "#D9D9D94D",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 4px 4px 0px #00000040",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Image src={item.src} width={40} height={34} alt="item1" />
              </Box>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};
