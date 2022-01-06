import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "../../components/Head";
import Navigation from "../../components/Navigation";
import theme from "../../theme";
import GlobalStyle from "../../theme/GlobalStyle";
import HelloP5 from "./HelloP5";

const ArtWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function ArtPage() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head />
      <Navigation />
      <ArtWrapper>
        <HelloP5 />
      </ArtWrapper>
    </ThemeProvider>
  );
}

export default ArtPage;
