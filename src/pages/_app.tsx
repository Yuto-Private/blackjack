import React from "react";
import { AppProps } from "next/app";
import "ress";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
