import React from "react";
import styled, { StyledComponent } from "styled-components";
import AOS from "aos";

type div = StyledComponent<"div", any, {}, never>;
type img = StyledComponent<"img", any, {}, never>;

export type contentObj = {
  id: number;
  title1: string;
  title2: string;
  content: string;
  left: boolean;
  srcImage: string;
  styleID: string;
};

export interface Props {
  contentArray: contentObj[];
}

const Content = (props: Props) => {
  const [portrait, setPortrait] = React.useState(false);

  React.useEffect((): void => {
    AOS.init();
  }, []);

  React.useEffect((): void => {
    if (window.innerWidth >= window.innerHeight) {
      setPortrait(false);
    } else {
      setPortrait(true);
    }
  });

  return (
    <ContentWrapper id="a2">
      {props.contentArray.map((item) => (
        <ContentElement key={item.id}>
          {portrait === false ? (
            item.left === true ? (
              <>
                <ElementText data-aos="fade-up">
                  <h3>{item.title1}</h3>
                  <h1>{item.title2}</h1>
                  <h2>{item.content}</h2>
                </ElementText>
                <ElementImage id={item.styleID} src={item.srcImage} />
              </>
            ) : (
              <>
                <ElementImage id={item.styleID} src={item.srcImage} />
                <ElementText data-aos="fade-up">
                  <h3>{item.title1}</h3>
                  <h1>{item.title2}</h1>
                  <h2>{item.content}</h2>
                </ElementText>
              </>
            )
          ) : (
            <>
              <ElementText data-aos="fade-up">
                <h3>{item.title1}</h3>
                <h1>{item.title2}</h1>
                <h2>{item.content}</h2>
              </ElementText>
              <ElementImage id={item.styleID} src={item.srcImage} />
            </>
          )}
        </ContentElement>
      ))}
    </ContentWrapper>
  );
};

const ContentWrapper: div = styled.div`
  width: 100vw;
  height: auto;
  background-color: whitesmoke;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

const ContentElement: div = styled.div`
  width: 70vw;
  height: 80vh;
  margin-left: 15vw;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);

  justify-items: center;
  align-items: center;

  #i1 {
    width: 19vw;
    height: 55vh;
  }
  #i2 {
    width: 23vw;
    height: 55vh;
  }

  #i4 {
    width: 30vw;
    height: 40vh;
  }
  #i5 {
    width: 30vw;
    height: 40vh;
  }

  @media screen and (orientation: portrait) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 100vh;
    margin-left : 5vw;

    #i1 {
      width: 60vw;
      height: 55vh;
    }
    #i2 {
      width: 70vw;
      height: 55vh;
    }

    #i4 {
      width: 80vw;
      height: 40vh;
    }
    #i5 {
      width: 80vw;
      height: 40vh;
    }
  }
`;

const ElementImage: img = styled.img`
  display: block;
`;

const ElementText: div = styled.div`
  width: 20vw;
  height: 38vh;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(1, 1fr);

  justify-items: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 90vw;
    justify-items: left;
   
  }

  h3 {
    font-weight: 400;
    color: gray;
    opacity: 0.8;
    font-size: 0.8vw;
    width: 20vw;
    margin: 0;

    @media screen and (orientation: portrait) {
      width: 90vw;
      font-size: 2vh;
    }

    
  }

  h1 {
    font-weight: 500;
    color: black;
    font-size: 2.25vw;
    width: 20vw;
    margin: 0;

    @media screen and (orientation: portrait) {
      width: 90vw;
      font-size: 4vh;
    }
  }

  h2 {
    font-weight: 300;
    color: gray;
    opacity: 0.8;
    font-size: 1.1vw;
    width: 20vw;
    margin: 0;
    font-size: 2.5vh;

    @media screen and (orientation: portrait) {
      width: 90vw;
    }
  }
`;

export default Content;
