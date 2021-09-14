import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import {
  H2,
  CodeCircleDiv,
  MusicCircleDiv,
  CodeWrapper,
  Project,
  ProjectTitle,
  ProjectDescription,
  ProjectTechnologies,
  MusicWrapper,
  CodeProjectWrapper,
  MusicProjectWrapper,
  Jamie,
} from "../styles/index.styled";

const IndexPage = () => (
  <PageWrapper>
    {/* <Jamie /> */}
    <CodeWrapper id="code">
      <CodeCircleDiv />
      <CodeProjectWrapper>
        <H2>Latest Projects</H2>
        <Project>
          <ProjectTitle>jamieguerreroportfolio</ProjectTitle>
          <ProjectDescription>Website I built for myself 👌🏽</ProjectDescription>
          <ProjectTechnologies>
            Gatsby, React, ThreeJS, GSAP, Netlify
          </ProjectTechnologies>
        </Project>
        <Project>
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectDescription>Website I built for myself 👌🏽</ProjectDescription>
          <ProjectTechnologies>
            Gatsby, React, ThreeJS, GSAP, Netlify
          </ProjectTechnologies>
        </Project>
        <Project>
          <ProjectTitle>Project 3</ProjectTitle>
          <ProjectDescription>Website I built for myself 👌🏽</ProjectDescription>
          <ProjectTechnologies>
            Gatsby, React, ThreeJS, GSAP, Netlify
          </ProjectTechnologies>
        </Project>
      </CodeProjectWrapper>
      <Project />
      <Project />
    </CodeWrapper>
    <MusicWrapper id="music">
      <MusicProjectWrapper>
        <H2>What I'm Listening To</H2>
        beat tapes
        https://open.spotify.com/playlist/7Fil9eRQDLT8aiFvqrjiur?si=edd80eeca11d4403
        feel these ones in my heart
        https://open.spotify.com/playlist/3tkCuefAHyEC1HJv8ZX9Yk?si=796be0ecee25421d
        🗣 cover these
        https://open.spotify.com/playlist/2sPVqA5fBCcHjPgSxoWRXS?si=7364362fbc614efe
        bluffs ting
        https://open.spotify.com/playlist/66KQJb6pC49SOZ1oAW7oOX?si=1140bb79ed6841eb
      </MusicProjectWrapper>
      <MusicCircleDiv />
    </MusicWrapper>
  </PageWrapper>
);

export default IndexPage;
