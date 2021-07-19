import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import theme from "../theme";
import GlobalStyle from "../theme/GlobalStyle";
import {
  Grid,
  PageWrapper,
  NavigationBar,
  H1,
  H2,
  Menu,
  MenuItem,
  Link,
  CodeWrapper,
  Project,
  ProjectTitle,
  ProjectDescription,
  ProjectTechnologies,
  AnimationWrapper,
  MusicWrapper,
} from "./index.styled";

const IndexPage = () => {
  const titles = ["Hi, I'm Jamie Guerrero ✌🏼", "It's nice to meet you!"];
  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => setTitleIndex((i) => (i === 0 ? 1 : 0)), 3000);
  }, [titleIndex]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titles[titleIndex]}</title>
        <link rel="canonical" href="http://www.jamieguerrero.com" />
      </Helmet>
      <Grid>
        <PageWrapper>
          <NavigationBar>
            <H1>JAMIE GUERRERO</H1>
            <Menu>
              <MenuItem>
                <Link href="#code">code</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#animation">animation</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#music">music</Link>
              </MenuItem>
            </Menu>
          </NavigationBar>
          <CodeWrapper id="code">
            <H2>Projects</H2>
            <Project>
              <ProjectTitle>jamieguerreroportfolio</ProjectTitle>
              <ProjectDescription>
                Website I built for myself 👌🏽
              </ProjectDescription>
              <ProjectTechnologies>
                Gatsby, React, ThreeJS, GSAP, Netlify
              </ProjectTechnologies>
            </Project>
            <Project />
            <Project />
          </CodeWrapper>
          <AnimationWrapper id="animation">
            <H2>My Doodles</H2>
          </AnimationWrapper>
          <MusicWrapper id="music">
            <H2>What I'm Listening To</H2>
          </MusicWrapper>
        </PageWrapper>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
};

export default IndexPage;
