import RootLayout from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/fonts.css";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "@/constans/theme";
import useAccountInfoStore from "@/store/accountInformation";
import { userProfile } from "@/api/account";
import toast from "react-hot-toast";
import AlertNotif from "@/components/AlertNotif";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { push } = useRouter();
  const setAccountInfo = useAccountInfoStore(
    (state) => state.setAccountInformation
  );
  const reset = useAccountInfoStore((state) => state.reset);

  const getAccount = () => {
    userProfile()
      .then((payload) => {
        if (payload) {
          setAccountInfo(payload[0]);
        }
      })
      .catch((reason) => {
        if (reason.response) {
          if (
            reason.response.status === 401 ||
            reason.response.status === 403
          ) {
            toast.custom(() => (
              <AlertNotif
                title="Unauthenticated, Redirecting to website."
                type="error"
              />
            ));

            push("/account/login");
            // redircetToLogin();
            return false;
          }
          return { error: true, response: reason.response };
        }
      });
  };

  const initial = () => {
    if (window.location.pathname === "/login") return undefined;
    getAccount();
  };

  useEffect(initial, []);

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
