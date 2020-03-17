import React from "react";
import { AppProps } from "next/app";
import "ress";
import { Provider } from "react-redux";
import store from "../domain/stores/";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
