import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  grid-column: -1/1;
  height: 30rem;
`;

const Socials = styled.ul``;
const SocialItem = styled.li``;
const Link = styled.a``;

const MadeWithLove = styled.p``;

function Footer() {
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

export default Footer;
