import React from "react";
import { Helmet } from "react-helmet";
import useTitles from "../../hooks/useTitles";
import GlobalStyle from "../../theme/GlobalStyle";

export default function Head() {
  const { title } = useTitles();
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://www.jamieguerrero.com" />
      </Helmet>
    </>
  );
}
