import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Footer, Header } from "@/shared";
import { UserContextProvider } from "@/context/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </UserContextProvider>
    </>
  );
}
