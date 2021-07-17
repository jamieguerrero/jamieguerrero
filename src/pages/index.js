import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../theme/GlobalStyle";
import Grid from "./index.styled";

const PageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationBar = styled.div``;
const H1 = styled.h1``;
const H2 = styled.h2``;

const Menu = styled.ul``;
const MenuItem = styled.li``;
const Link = styled.a``;

const CodeWrapper = styled.div``;

const Project = styled.div``;
const ProjectTitle = styled.p``;
const ProjectDescription = styled.p``;
const ProjectTechnologies = styled.p``;

const AnimationWrapper = styled.div``;
const MusicWrapper = styled.div``;

const A = styled.a`
  text-decoration: none;
  font-size: 70px;
`;

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
          {/* <NavigationBar>
            <H1>Jamie Guerrero</H1>
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
          </MusicWrapper> */}
          <H1>
            <A href="https://github.com/jamieguerrero">✌🏼</A>
          </H1>
        </PageWrapper>
      </Grid>
    </ThemeProvider>
  );
};

export default IndexPage;
