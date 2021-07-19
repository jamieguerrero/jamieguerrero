import styled from "styled-components";

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

export const PageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

export const NavigationBar = styled.div``;
export const H1 = styled.h1`
  ${({ theme }) => theme.typography.H1}
`;
export const H2 = styled.h2`
  ${({ theme }) => theme.typography.H2}
`;

export const Menu = styled.ul``;
export const MenuItem = styled.li``;
export const Link = styled.a``;

export const CodeWrapper = styled.div``;

export const Project = styled.div``;
export const ProjectTitle = styled.p``;
export const ProjectDescription = styled.p``;
export const ProjectTechnologies = styled.p``;

export const AnimationWrapper = styled.div``;
export const MusicWrapper = styled.div``;
