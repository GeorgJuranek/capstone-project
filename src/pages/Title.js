import styled from 'styled-components';

import background from '../images/titlescreen/background.png';
import frame from '../images/titlescreen/frame.png';
import header from '../images/titlescreen/header.png';
import wizardsQandA from '../images/titlescreen/wizardsQandA.png';
import {CodeSpan} from '../stylesheet/StyledSpans.js';

export default function Title() {
  return (
    <>
      <Background src={background} alt="" />
      <Frame src={frame} alt="" />
      <Header src={header} alt="Shell Wizard" />
      <Wizards src={wizardsQandA} alt="" />
      <TextDiv>
        With this App you can learn about your first steps with the zshell (what you want to learn, if you want to learn
        how to code!)
        <br />
        You are a Wizard searching for wisdom in the inner depths of a cursed maze. Your only chance to find your way
        through this, is to type in Spells (that resemble the zShell-commands) to the textfield in the area below.
        <StyledDl>
          <dt>
            <CodeSpan>pwd </CodeSpan>
          </dt>
          <dl> to check on your current position.</dl>
          <dt>
            <CodeSpan>ls </CodeSpan>
          </dt>
          <dl> to find new rooms.</dl>
          <dt>
            <CodeSpan>cd </CodeSpan>
          </dt>
          <dl> to move from one room to another.</dl>
          <dt>
            <CodeSpan>cat </CodeSpan>
          </dt>
          <dl> to check on items in the rooms.</dl>
        </StyledDl>
        If done right, each of these spells will summon a magical gift that will help you on your journey...
        <StartButton> START</StartButton>
      </TextDiv>
    </>
  );
}

const StartButton = styled.button`
  display: block;
  width: 100px;
  height: 50px;
  margin: 50px auto;
  box-shadow: 0 5px 25px #888;
  letter-spacing: 3px;
  border-color: white;
`;

const TextDiv = styled.div`
  //z-index: 3;
  position: fixed;
  top: 12%;
  right: 0%;
  margin: 20%;
  width: 65%;
  max-width: 600px;
  height: 35%;
  overflow: scroll;
  line-height: 1.8rem;
  text-shadow: 0 0 5px black;
  text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black, -1px -1px 1px black;
  color: whitesmoke;
`;

const Frame = styled.img`
  width: 99%;
  height: 99%;
  position: absolute;
  padding: 15px;
`;

const Background = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Header = styled.img`
  width: 50%;
  max-width: 700px;
  height: auto;
  top: 50px;
  right: 30%;
  position: fixed;
`;

const Wizards = styled.img`
  width: 80%;
  max-width: 1300px;
  height: auto;
  bottom: 50px;
  left: 8%;
  position: fixed;
  margin: auto;

  @media (max-height: 40em) {
    opacity: 0.3;
  }
  @media (min-width: 600px) {
    height: 50%;
    width: auto;
  }
`;

const StyledDl = styled.dl`
  display: grid;
  justify-items: center;
  align-items: start;
  grid-template-rows: 20px 1fr 20px 1fr;
  row-gap: 10px;
  grid-gap: 15px;
  background-color: skyblue;
  padding: 10px 20px;
  border: 2px solid white;
  opacity: 0.6;
`;
