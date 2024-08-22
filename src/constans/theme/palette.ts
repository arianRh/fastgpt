import { PaletteOptions } from "@mui/material";

// declare  module (override MUi types)
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
  interface PaletteColor {
    min?: string;
    max?: string;
    background?: string;
    darker?: string;
    "900"?: string;
    "800"?: string;
    "700"?: string;
    "600"?: string;
    "500"?: string;
    "400"?: string;
    "300"?: string;
    "200"?: string;
    "100"?: string;
    "50"?: string;
  }
  interface SimplePaletteColorOptions {
    min?: string;
    max?: string;
    background?: string;
    darker?: string;
    "900"?: string;
    "800"?: string;
    "700"?: string;
    "600"?: string;
    "500"?: string;
    "400"?: string;
    "300"?: string;
    "200"?: string;
    "100"?: string;
    "50"?: string;
  }
}

//  define const lightPalette:PaletteOptions
export const lightPalette: PaletteOptions = {
  primary: {
    "900": "#160FCA",
    "800": "#2B30DB",
    "700": "#343DE6",
    "600": "#3E49F3",
    main: "#4353FF",
    "400": "#6270FF",
    "300": "#818DFF",
    "200": "#A8AEFF",
    "100": "#CCCEFF",
    "50": "#EBECFF",
  },
  neutral: {
    "900": "#000000",
    "800": "#262626",
    "700": "#434343",
    "600": "#555555",
    "500": "#7B7B7B",
    "400": "#9D9D9D",
    "300": "#C4C4C4",
    "200": "#D9D9D9",
    "100": "#E9E9E9",
    "50": "#F5F5F5",
    min: "#FFFFFF",
  },

  success: {
    light: "#e7feea",
    main: "#2FB14D4D",
    dark: "#2FB14D",
  },
  warning: {
    light: "#fdf8ea",
    main: "#FF890D80",
    dark: "#FF890D",
  },
  error: {
    light: "#fbeef6",
    main: "#D7284B",
    dark: "#DA4747",
  },
  text: {
    primary: "#000000",
  },
};
