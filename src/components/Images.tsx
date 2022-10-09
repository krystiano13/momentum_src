import React from "react";
import styled, { StyledComponent } from "styled-components";

import i1 from '../images/i1.png';
import i2 from '../images/i2.jpeg';

type div = StyledComponent<"div", any, {}, never>;

const Images = () => {
    return <ImagesWrapper>
        <FirstImage />
        <SecondImage />
  </ImagesWrapper>;
};

const ImagesWrapper: div = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: white;

  @media screen and (orientation : portrait) {
    height : 27vh;
  }
`;

const FirstImage = styled.div`
  display: block;
  margin-left: 10vw;
  transform: translateY(25vh);
  width: 80vw;
  height: 5.5vh;
  background-image: url(${i1});
  background-size: 100%;
  background-repeat: no-repeat;

  @media screen and (orientation: portrait) {
    transform: translateY(2vh);
  }
`;

const SecondImage: div = styled.div`
  width: 100vw;
  height: 60vh;
  background-image: url(${i2});
  background-size: 100%;
  background-repeat: no-repeat;
  transform: translateY(35vh);

  @media screen and (orientation: portrait) {
    transform: translateY(6.25vh);
  }
`;

export default Images;
