import React from "react";
import styled, { StyledComponent } from "styled-components";

type div = StyledComponent<"div", any, {}, never>;

const Cytaty = () => {
  const scrollLeft = () => {
    const cc = document.getElementById("cc");
    cc!.scrollLeft -= 9999;
  };
  const scrollRight = () => {
    const cc = document.getElementById("cc");
    cc!.scrollLeft += 9999;
  };
  return (
    <CytatyWrapper>
      <ArrowContainer>
        <button onClick={scrollLeft}> &#60;</button>
      </ArrowContainer>
      <CytatyContent id="cc">
        <CytatyElement>
          <svg
            width="15px"
            height="14px"
            viewBox="0 0 15 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>“</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              fill="none"
            >
              <g
                id="Artboard-2"
                transform="translate(-16.000000, -10.000000)"
                fill="#D6D6D6"
              >
                <path
                  d="M31.0195312,12.59375 C28.7955618,13.6875055 27.6835938,14.9726489 27.6835938,16.4492188 C28.6315152,16.5585943 29.4153615,16.9459602 30.0351562,17.6113281 C30.654951,18.276696 30.9648438,19.0468706 30.9648438,19.921875 C30.9648438,20.8515671 30.6640655,21.6354135 30.0625,22.2734375 C29.4609345,22.9114615 28.7044316,23.2304688 27.7929688,23.2304688 C26.7721303,23.2304688 25.8880246,22.8157594 25.140625,21.9863281 C24.3932254,21.1568969 24.0195312,20.1497455 24.0195312,18.9648438 C24.0195312,15.4101385 26.0064905,12.6302184 29.9804688,10.625 L31.0195312,12.59375 Z M23.0117188,12.59375 C20.76952,13.6875055 19.6484375,14.9726489 19.6484375,16.4492188 C20.6145882,16.5585943 21.407549,16.9459602 22.0273438,17.6113281 C22.6471385,18.276696 22.9570312,19.0468706 22.9570312,19.921875 C22.9570312,20.8515671 22.6516958,21.6354135 22.0410156,22.2734375 C21.4303355,22.9114615 20.6692754,23.2304688 19.7578125,23.2304688 C18.7369741,23.2304688 17.8574256,22.8157594 17.1191406,21.9863281 C16.3808557,21.1568969 16.0117188,20.1497455 16.0117188,18.9648438 C16.0117188,15.4101385 17.9895636,12.6302184 21.9453125,10.625 L23.0117188,12.59375 Z"
                  id="“"
                ></path>
              </g>
            </g>
          </svg>
          <h2>
            HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida
            at eget metus. Etiam porta sem malesuada magna mollis euismod.ing
          </h2>
          <CytatyEnd>
            <label>Joshua Home</label>
            <span></span>
            <strong>
              <label>New York Times</label>
            </strong>
          </CytatyEnd>
        </CytatyElement>
        <CytatyElement>
          <svg
            width="15px"
            height="14px"
            viewBox="0 0 15 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>“</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" fill="none">
              <g
                id="Artboard-2"
                transform="translate(-16.000000, -10.000000)"
                fill="#D6D6D6"
              >
                <path
                  d="M31.0195312,12.59375 C28.7955618,13.6875055 27.6835938,14.9726489 27.6835938,16.4492188 C28.6315152,16.5585943 29.4153615,16.9459602 30.0351562,17.6113281 C30.654951,18.276696 30.9648438,19.0468706 30.9648438,19.921875 C30.9648438,20.8515671 30.6640655,21.6354135 30.0625,22.2734375 C29.4609345,22.9114615 28.7044316,23.2304688 27.7929688,23.2304688 C26.7721303,23.2304688 25.8880246,22.8157594 25.140625,21.9863281 C24.3932254,21.1568969 24.0195312,20.1497455 24.0195312,18.9648438 C24.0195312,15.4101385 26.0064905,12.6302184 29.9804688,10.625 L31.0195312,12.59375 Z M23.0117188,12.59375 C20.76952,13.6875055 19.6484375,14.9726489 19.6484375,16.4492188 C20.6145882,16.5585943 21.407549,16.9459602 22.0273438,17.6113281 C22.6471385,18.276696 22.9570312,19.0468706 22.9570312,19.921875 C22.9570312,20.8515671 22.6516958,21.6354135 22.0410156,22.2734375 C21.4303355,22.9114615 20.6692754,23.2304688 19.7578125,23.2304688 C18.7369741,23.2304688 17.8574256,22.8157594 17.1191406,21.9863281 C16.3808557,21.1568969 16.0117188,20.1497455 16.0117188,18.9648438 C16.0117188,15.4101385 17.9895636,12.6302184 21.9453125,10.625 L23.0117188,12.59375 Z"
                  id="“"
                ></path>
              </g>
            </g>
          </svg>
          <h2>
            HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida
            at eget metus. Etiam porta sem malesuada magna mollis euismod.ing
          </h2>
          <CytatyEnd>
            <label>Joshua Home</label>
            <span></span>
            <strong>
              <label>New York Times</label>
            </strong>
          </CytatyEnd>
        </CytatyElement>
      </CytatyContent>
      <ArrowContainer>
        <button onClick={scrollRight}> &#62;</button>
      </ArrowContainer>
    </CytatyWrapper>
  );
};

export default Cytaty;

const CytatyWrapper: div = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: whitesmoke;
  overflow: hidden;
  display: flex;

  @media screen and (orientation : portrait) {
    height : 40vh;
  }
`;

const CytatyContent: div = styled.div`
  width: 50vw;
  height: 45vh;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  @media screen and (orientation: portrait) {
    width: 50vw;
    height: 35vh;
    padding-top : 2vh;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }
`;

const CytatyElement: div = styled.div`
  width: 50vw;
  height: 45vh;

  @media screen and (orientation: portrait) {
    width: 50vw;
    height: 35vh;
  }

  svg {
    display: block;
    width: 4vw;
    height: 4vw;
    margin-left: 23vw;
    margin-top: 3vh;

    @media screen and (orientation: portrait) {
      width: 8vw;
      height: 8vw;
      margin-left: 21vw;
      margin-top: 0vh;
    }
  }

  h2 {
    text-align: center;
    font-weight: 400;
    padding-top: 4vh;
    font-size: 1.35vw;
    color: black;
    opacity: 0.7;
    width: 50vw;

    @media screen and (orientation: portrait) {
      width: 50vw;
      font-size: 1.35vh;
    }
  }
`;

const CytatyEnd: div = styled.div`
  width: 23vw;
  height: 3vh;
  margin-left: 13.5vw;
  padding-top: 2.5vh;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 50vw;
    margin-left: 0vw;
    padding-top: 0;
    transform: translateY(2.5vh);
  }

  label {
    font-size: 1vw;

    @media screen and (orientation: portrait) {
      font-size: 1vh;
    }
  }

  span {
    width: 3vw;
    height: 0.25vh;
    background-color: gray;
  }
`;

const ArrowContainer: div = styled.div`
  width: 25vw;
  height: 40vh;
  display: flex;
  justify-items: center;
  justify-content: center;

  @media screen and (orientation: portrait) {
    height: 35vh;
  }

  button {
    background: transparent;
    cursor: pointer;
    color: gray;
    font-size: 4vw;

    @media screen and (orientation: portrait) {
      font-size: 4vh;
    }

    border: none;
    opacity: 0.5;
  }
`;
