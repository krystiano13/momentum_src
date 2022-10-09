import React from "react";
import styled, {
  StyledComponent,
  ThemedStyledFunction,
} from "styled-components";

import richard from "../images/Richard.png";

type div = StyledComponent<"div", any, {}, never>;
type img = StyledComponent<"img", any, {}, never>;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarLogo src={richard} alt="Logo named Richard" />
      <div></div>
      <Navigation>
        <a href="#a1">About</a>
        <a href="#a2">Features</a>
        <a href="#a3">How to Use</a>
        <a href="#a4">Download</a>
      </Navigation>
    </NavbarWrapper>
  );
};

const NavbarWrapper: div = styled.div`
  width: 100vw;
  height: 10vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-items: center;
  align-items: center;
`;

const NavbarLogo: img = styled.img`
  width: 6vw;
  height: 4vh;
  display: block;
  margin-right: 12vw;

  @media screen and (orientation: portrait) {
    width: 11vh;
    height: 5vh;
    margin-right: 4vw;
    transform: translateX(3vw);
  }
`;

const Navigation: div = styled.div`
  width: 30vw;
  height: 10vh;

  transform: translateX(-7vw);

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  justify-items: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 70vw;
    a {
      font-size: 1.6vh;
      transform: translateX(3vw);
      font-weight: 500;
    }
  }

  a {
    cursor: pointer;
    color: white;
    text-decoration : none;
    font-size : 1vw;

    @media screen and (orientation : portrait) {
      font-size : 1.25vh;
    }
  }
`;

export default Navbar;
