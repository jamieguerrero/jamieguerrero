import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: max-content;

  height: 100vh;
  grid-column-gap: ${({ theme }) => `${theme.grid.gutter.Mobile}px`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column-gap: ${({ theme }) => `${theme.grid.gutter.Tablet}px`};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.Desktop}px`}) {
    grid-column-gap: ${({ theme }) => `${theme.grid.gutter.Desktop}px`};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.DesktopHD}px`}) {
    grid-column-gap: ${({ theme }) => `${theme.grid.gutter.DesktopHD}px`};
  }
`;

export const H1 = styled.h1`
  ${({ theme }) => theme.typography.H1};
`;

export const H2 = styled.h2`
  ${({ theme }) => theme.typography.H2};
`;

export const H3 = styled.h3`
  ${({ theme }) => theme.typography.H3};
`;

export const H4 = styled.h4`
  ${({ theme }) => theme.typography.H4};
`;

export const H5 = styled.h5`
  ${({ theme }) => theme.typography.H5};
`;

export const Body = styled.p`
  ${({ theme }) => theme.typography.Body};
`;
export const Strong = styled.strong`
  ${({ theme }) => theme.typography.Strong};
`;
export const StrongItalic = styled.i`
  ${({ theme }) => theme.typography.StrongItalic};
`;
export const Italic = styled.i`
  ${({ theme }) => theme.typography.Italic};
`;

export const Link = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const UL = styled.ul``;

export const LI = styled.li`
  line-height: 2;
`;

export const MarqueeHolder = styled.div`
  width: 100%;
`;

export const Marquee = styled.p`
  animation: slide 10s linear infinite;

  @keyframes slide {
    0% {
      transform: translatex(0%);
    }

    100% {
      transform: translatex(-100%);
    }
  }
`;

// ========================= Code Section =========================

export const CodeWrapper = styled.div`
  display: grid;
  margin: 5em 0;
  grid-template-columns: repeat(10, 1fr);

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    margin: 15em 0;
    flex-direction: row;
  }
`;

export const CodeCircleDiv = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background-color: grey;
  grid-column: -1/1;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column: 1/6;
  }
`;

export const CodeProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: -1/1;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column: 6/11;
  }
`;

export const Project = styled.div``;
export const ProjectTitle = styled.p``;
export const ProjectDescription = styled.p``;
export const ProjectTechnologies = styled.p``;

// ========================= Animation Section =========================

export const AnimationWrapper = styled.div`
  display: grid;
  margin: 5em 0;
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas: "a" / "b";
  grid-column: -1/1;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column: 6/11;
    margin: 15em 0;
    flex-direction: row;
  }
`;

export const AnimationCircleDiv = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background-color: grey;
  grid-column: -1/1;
  grid-area: a;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column: 6/11;
  }
`;

export const AnimationProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: -1/1;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column: 1/6;
  }
`;

// ========================= Music Section =========================

export const MusicWrapper = styled.div`
  display: grid;
  margin: 5em 0;
  grid-template-columns: repeat(10, 1fr);
  grid-column: -1/1;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column: 6/11;
    margin: 15em 0;
    flex-direction: row;
  }
`;

export const MusicCircleDiv = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background-color: grey;
  grid-column: -1/1;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column: 6/11;
  }
`;

export const MusicProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: -1/1;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column: 1/6;
  }
`;

export const Jamie = styled(Canvas)``;
