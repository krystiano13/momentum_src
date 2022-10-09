import React from "react";
import styled, { StyledComponent } from "styled-components";

import r1 from '../images/r1.png';

type div = StyledComponent<"div", any, {}, never>;
const AElements: string[] = ['Email','Instagram','Facebook','Twitter','License','Youtube'];

const Updates = () => {
    return (
      <UpdatesWrapper>
        <h1>Get updates from Richard</h1>
            <h2>New course alerts, discounts and free lessons</h2>
            <input placeholder="Enter your email" />
            <button>Subscribe</button>
            <br />
        <img src={r1} />
        <AWrapper>
          {
            AElements.map(item => (
              <h6>{ item }</h6>
            ))
            }
        </AWrapper>
      </UpdatesWrapper>
    );
};

const AWrapper: div = styled.div`
  width: 35vw;
  height: 3vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  align-items: center;
  margin-left: 32.5vw;
  padding-top: 4vh;

  @media screen and (orientation: portrait) {
    width: 90vw;
    margin-left: 5vw;
    padding-top : 8vh;
  }

  h6 {
    font-weight: 300;
    color: grey;
    cursor: pointer;
    font-size: 0.7vw;
    width: 4vw;
    margin: 0;

    @media screen and (orientation: portrait) {
      width : 12vw;
      font-size : 1.25vh;
      text-align: center;
    }

    :hover {
      color: white;
    }
  }
`;

const UpdatesWrapper: div = styled.div`
  width: 100vw;
  height: 70vh;
  background-color: #333;

  h1,
  h2 {
    margin: 0;
    text-align: center;
    color: white;
  }

  h1 {
    font-size: 2.5vw;
    padding-top: 10vh;

    @media screen and (orientation: portrait) {
      font-size: 3.25vh;
    }
  }

  h2 {
    font-weight: 300;
    color: gray;
    font-size: 0.9vw;
    padding-top: 2vh;

    @media screen and (orientation: portrait) {
      font-size: 1.6vh;
    }
  }

  input {
    width: 18vw;
    height: 7vh;
    box-sizing: border-box;
    margin-left: 37vw;
    margin-top: 8vh;
    outline: none;
    font-size: 0.8vw;

    @media screen and (orientation: portrait) {
      width: 65vw;
      margin-left: 5vw;
      font-size: 1.5vh;
    }
  }

  button {
    width: 8vw;
    height: 7vh;
    font-size: 0.8vw;
    box-sizing: border-box;
    color: white;
    background-color: #ee1681;
    border: none;
    cursor: pointer;

    @media screen and (orientation: portrait) {
      width: 25vw;
      font-size: 1.5vh;
    }

    transition: background-color 600ms;
  }

  button:hover {
    background-color: black;
  }

  img {
    width: 8vw;
    height: 6vw;
    margin-left: 46vw;
    padding-top: 10vh;

    @media screen and (orientation: portrait) {
      width: 32vw;
      height: 24vw;
      margin-left : 34vw;
      padding-top : 5vh;
    }
  }
`;

export default Updates;
