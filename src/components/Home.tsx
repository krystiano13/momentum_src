import React from "react";
import styled, { StyledComponent } from "styled-components";
import Navbar from "./Navbar";
import HomeImage from "../images/HomeImage.png";

type divComponent = StyledComponent<"div", any, {}, never>;

const Home = (): JSX.Element => {
  return (
    <>
      <HomeWrapper>
        <Navbar />
        <HomeContainer>
          <HomeLeft>
            <h1>Momentum</h1>
            <h3>Launch your product — and savor the momentum.</h3>
            <button>Get the App</button>
          </HomeLeft>
          <HomeRight />
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

const HomeWrapper: divComponent = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #dd1173, #350e47);
`;

const HomeContainer: divComponent = styled.div`
  width: 100vw;
  height: 90vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    height: 100vh;
  }
`;

const NavSvg = styled.svg`
  position: fixed;
  width: 10vw;
  height: 10vw;
`;

const HomeLeft: divComponent = styled.div`
  width: 35vw;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 10vh;

  @media screen and (orientation: portrait) {
    width: 40vw;
    height: 50vh;
    margin-left: 10vw;
  }

  h1 {
    color: white;
    font-size: 5.75vw;
    margin: 0;

    @media screen and (orientation: portrait) {
      font-size: 3.25vh;
    }

    animation: appear 0.6s;
  }

  h3 {
    color: white;
    font-size: 1.55vw;
    margin: 0;
    font-weight: 400;
    max-width: 40vw;
    animation: appear 0.6s;
    @media screen and (orientation: portrait) {
      font-size: 1.8vh;
      padding-top: 1vh;
    }
  }

  button {
    width: 9vw;
    height: 6vh;
    margin-top: 4vh;
    animation: appear 0.6s;

    @media screen and (orientation: portrait) {
      width: 16vh;
      height: 7vh;
      font-size: 1.8vh;
      margin-top: 2vh;
    }

    font-size: 0.9vw;

    border: none;
    color: white;
    background-color: #fc0a7e;

    cursor: pointer;
    transition: 300ms;
    will-change: color background-color;

    :hover {
      color: #333;
      background-color: whitesmoke;
    }
  }

  @keyframes appear {
    from {
      transform: translateY(15vh);
      opacity: 0;
    }
    to {
      transform: translateY(0vh);
      opacity: 1;
    }
  }
`;
const HomeRight: divComponent = styled.div`
  width: 40vw;
  height: 80vh;
  overflow-x: hidden;

  margin-top: 10vh;

  background-image: url(${HomeImage});
  background-size: cover;

  @media screen and (orientation: portrait) {
   width : 65vw;
   height : 40vh;
   transform : translateX(-15vw) translateY(5vh);
  }
`;

export default Home;
