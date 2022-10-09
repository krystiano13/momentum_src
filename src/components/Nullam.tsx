import React from "react";
import styled, { StyledComponent } from "styled-components";
import AOS from "aos";
import "./aos.css";

import NullamImg from "../images/NullamImg.png";

type div = StyledComponent<"div", any, {}, never>;

const Nullam: React.FC = () => {
  React.useEffect((): void => {
    AOS.init();
  }, []);
  return (
    <NullamWrapper id="a1">
      <h5 data-aos="fade-up">AENEAN CONSECTETUR PORTA</h5>
      <h3 data-aos="fade-up">
        Nullam quis risus eget urna mollis ornare vel eu leo.
      </h3>
      <img src={NullamImg} />
    </NullamWrapper>
  );
};

const NullamWrapper: div = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #333;

  h5 {
    margin: 0;
    color: whitesmoke;
    opacity: 0.9;
    text-align: center;
    height: 3vw;
    font-size: 1vw;
    font-weight: 300;
    margin-top: 10vw;
  }

  h3 {
    margin: 0;
    color: white;
    text-align: center;
    height: 3vw;
    font-size: 2vw;
    max-width: 40vw;
    margin-left: 30vw;
    display: block;
  }

  img {
    width: 60vw;
    height: 60vh;
    margin-left: 20vw;
    margin-top: 10vh;
  }

  @media screen and (orientation: portrait) {
    width: 100vw;
    height: 55vh;

    h5 {
      font-size: 1.5vh;
      margin-top: 10vh;
    }

    h3 {
      font-size: 2.5vh;
      max-width: 80vw;
      margin-left: 10vw;
      padding-top: 3.5vh;
    }

    img {
      width: 100vw;
      height: 32vh;
      margin-left: 0vw;
      margin-top: 8vh;
    }
  }
`;

export default Nullam;
