import styled from "styled-components";
import { LI, UL } from "./index.styled";

export const BookJane = styled.div`
  width: 100%;
`;
export const Freelancing = styled.div`
  height: 100vh;
  width: 100%;
`;
export const CanadianTire = styled.div`
  width: 100%;
`;
export const PianoTeacher = styled.div`
  width: 100%;
`;

export const Role = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CompanyAndTechnology = styled.div`
  background-color: white;
  height: 100vh;
  width: 50%;

  float: left;
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.Desktop}) {
  }
`;

export const JobDescriptions = styled.div`
  width: 50%;
  float: left;
`;

export const BuzzwordsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  margin: 10vh 0;
  ${UL} {
    list-style: none;
    margin: 0;
    padding: 0;

    ${LI} {
      line-height: 3;
    }
  }
`;
export const Buzzwords = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const EducationSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  margin: 10vh 0;
`;
export const InterestsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  margin: 10vh 0;

  ${UL} {
    list-style: none;
    margin: 0;
    padding: 0;

    ${LI} {
      line-height: 3;
    }
  }
`;

export const Interests = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
