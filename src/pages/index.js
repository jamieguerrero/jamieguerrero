import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "../components/Head";
import theme from "../theme";
import GlobalStyle from "../theme/GlobalStyle";
import Grid from "./index.styled";

const PageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
`;

const H1 = styled.h1``;

const A = styled.a`
  text-decoration: none;
  font-size: 70px;
  color: black;
`;

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head />
    <Grid>
      <PageWrapper>
        <H1>
          <A href="https://github.com/jamieguerrero">brb ✌🏼</A>
        </H1>
      </PageWrapper>
    </Grid>
  </ThemeProvider>
);

export default IndexPage;
