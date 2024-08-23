import RootLayout from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/fonts.css";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "@/constans/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
}
