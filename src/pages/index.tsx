import Head from "next/head";
import { Box, Typography, useTheme } from "@mui/material";

export default function Home() {
  const { palette } = useTheme();
  return (
    <>
      <Head>
        <title>FastGpt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main dir="rtl"></main>
    </>
  );
}
