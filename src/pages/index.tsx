import Head from "next/head";
import { Box, Typography, useTheme } from "@mui/material";
import { HomePage } from "@/containers/homePage";

export default function Home() {
  const { palette } = useTheme();
  return <HomePage />;
}
