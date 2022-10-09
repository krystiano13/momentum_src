import React from "react";
import styled, { StyledComponent } from "styled-components";

type div = StyledComponent<"div", any, {}, never>;
type numbObj = {
  title: string;
  content: string;
};

const NumbersElements: numbObj[] = [
  {
    title: "+12k",
    content: "Nibh Elit Tristique",
  },
  {
    title: "84",
    content: "Aenean Condimentum",
  },
  {
    title: "3,07",
    content: "Quam Inceptos",
  },
  {
    title: "24h",
    content: "Ullamcorper",
  },
];

const Numbers = () => {
  return (
    <NumbersWrapper>
      {NumbersElements.map((item) => (
        <NumbersElement>
          <h1>{item.title}</h1>
          <h2>{item.content}</h2>
        </NumbersElement>
      ))}
    </NumbersWrapper>
  );
};

const NumbersWrapper: div = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: whitesmoke;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);

  @media screen and (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  justify-items: center;
  align-items: center;
`;

const NumbersElement: div = styled.div`
  width: 20vw;
  height: 15vh;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  h1 {
    font-size: 3.5vw;
    font-weight: 400;
    text-align: center;
    margin: 0;
  }

  h2 {
    font-size: 1.25vw;
    font-weight: 400;
    text-align: center;
    margin: 0;
  }

  @media screen and (orientation : portrait) {
    width : 42vw;
    h1 {
      font-size : 5vh;
    }

    h2 {
      font-size : 2vh;
    }
  }
`;

export default Numbers;
