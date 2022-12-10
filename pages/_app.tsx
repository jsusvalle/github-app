import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { config } from "utils/configToast";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "styles/global";
import theme from "styles/theme";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer {...config} />
          <GlobalStyle />
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}