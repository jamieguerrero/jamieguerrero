import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: -1/1;
  height: 30rem;
  background-color: grey;
  color: white;
`;

const Socials = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const SocialItem = styled.li`
  list-style: none;
`;
const Link = styled.a``;

const MadeWithLove = styled.p``;

export default function Footer() {
  return (
    <FooterWrapper>
      <Socials>
        <SocialItem>
          <Link>instagram</Link>
        </SocialItem>
        <SocialItem>
          <Link>linkedin</Link>
        </SocialItem>
        <SocialItem>
          <Link>soundcloud</Link>
        </SocialItem>
        <SocialItem>
          <Link>spotify</Link>
        </SocialItem>
        <SocialItem>
          <Link>email</Link>
        </SocialItem>
      </Socials>
      <MadeWithLove>made with ❤️2021</MadeWithLove>
    </FooterWrapper>
  );
}
