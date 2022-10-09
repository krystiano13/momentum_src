import React from "react";
import styled, { StyledComponent } from "styled-components";
import AOS from 'aos';

type div = StyledComponent<'div', any, {}, never>

const Start = () => {
    React.useEffect((): void => {
        AOS.init();
    })
    return (
      <StartWrapper id="a4">
        <h1 data-aos="fade-up">Ready to get started ?</h1>
        <StartButtons data-aos="fade-up">
          <button id="b1">Download Now</button>
          <button id="b2">Get in Touch</button>
        </StartButtons>
      </StartWrapper>
    );
};

const StartWrapper: div = styled.div`
  width: 100vw;
  height: 40vh;
  background: linear-gradient(135deg, #dd1173, #7c186c);

  h1 {
    color: white;
    text-align: center;
    font-size: 2.25vw;
    font-weight: 500;
    margin: 0;
    padding-top: 10vh;

    @media screen and (orientation: portrait) {
      font-size: 4vh;
    }
  }
`;

const StartButtons: div = styled.div`
  width: 24vw;
  height: 8vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  margin-left: 38vw;
  padding-top: 5vh;

  @media screen and (orientation: portrait) {
    width: 80vw;
    margin-left: 10vw;
  }

  button {
    width: 10vw;
    height: 7vh;
    cursor: pointer;
    font-size: 0.85vw;
    font-weight: 500;

    @media screen and (orientation: portrait) {
      width: 30vw;
      height: 8vh;
      font-size: 1.5vh;
    }
  }

  #b1 {
    color: white;
    background-color: #ee1681;
    border: none;

    transition: 600ms;
  }

  #b1:hover {
    color: #333;
    background-color: whitesmoke;
  }

  #b2 {
    border: gray solid 0.1vw;
    color: white;
    background-color: transparent;
  }

  #b2:hover {
    border: white solid 0.1vw;
  }
`;

export default Start;
