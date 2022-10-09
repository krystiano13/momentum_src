import React from "react";
import styled, { StyledComponent } from "styled-components";

import Home from "./components/Home";
import Nullam from "./components/Nullam";
import Content from "./components/Content";
import Pluses from "./components/Pluses";
import Numbers from "./components/Numbers";
import Cytaty from "./components/Cytaty";
import Images from "./components/Images";
import Start from "./components/Start";
import Updates from "./components/Updates";

import { contentData1 } from "./components/contentData1";
import { contentData2 } from "./components/contentData2";

const Main = styled.div`
  width: 100vw;
  height: auto;
  overflow-x: hidden;
`;

function App() {
  return (
    <Main>
      <Home />
      <Nullam />
      <Content contentArray={contentData1} />
      <Pluses />
      <Numbers />
      <Content contentArray={contentData2} />
      <Cytaty />
      <Images />
      <Start />
      <Updates />
    </Main>
  );
}

export default App;
