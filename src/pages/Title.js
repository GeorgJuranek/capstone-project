import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import background from '../images/titlescreen/background.png';
import header from '../images/titlescreen/header.png';
import wizardsQandA from '../images/titlescreen/wizardsQandA.png';
import {CodeSpan} from '../stylesheet/StyledSpans.js';

export default function Title() {
  const navigate = useNavigate();
  return (
    <>
      <Background src={background} alt="" />
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
          <StyledDd> to check on your current position.</StyledDd>
          <dt>
            <CodeSpan>ls </CodeSpan>
          </dt>
          <StyledDd> to find new rooms.</StyledDd>
          <dt>
            <CodeSpan>cd </CodeSpan>
          </dt>
          <StyledDd> to move from one room to another.</StyledDd>
          <dt>
            <CodeSpan>cat </CodeSpan>
          </dt>
          <StyledDd> to check on items in the rooms.</StyledDd>
        </StyledDl>
        If done right, each of these spells will summon a magical gift that will help you on your exam...
        <StartButton onClick={() => navigate('/game')}> START</StartButton>
      </TextDiv>
    </>
  );
}

const StartButton = styled.button`
  display: block;
  width: 100px;
  height: 65px;
  margin: 100px auto 25px auto;
  box-shadow: 0 0 25px #888;
  letter-spacing: 3px;
  border-color: white;
  font-size: 18px;
  border-radius: 10px;
`;

const TextDiv = styled.div`
  position: fixed;
  top: 20%;
  right: 0%;
  margin: 10%;
  width: 80%;
  max-width: 1600px;
  height: 25%;
  overflow: scroll;
  text-shadow: 0 0 5px black;
  text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black, -1px -1px 1px black;
  color: whitesmoke;
  padding-top: 50px;
  font-size: 1.5rem;
  line-height: 1.5rem;

  @media (min-width: 600px) {
    //font-size: 1rem;
    line-height: 2.5rem;
  }
`;

const Background = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Header = styled.img`
  width: 50%;
  max-width: 1500px;
  height: auto;
  top: 50px;
  right: 30%;
  position: fixed;
`;

const Wizards = styled.img`
  width: 80%;
  max-width: 1500px;
  height: auto;
  bottom: 50px;
  left: 8%;
  position: fixed;
  margin: auto;

  @media (max-height: 40em) {
    opacity: 0.3;
  }
  @media (min-width: 600px) {
    height: 40%;
    width: auto;
  }
`;

const StyledDl = styled.dl`
  display: grid;
  justify-items: space-around;
  align-items: center;
  grid-template-columns: 20px 1fr;
  //background-color: skyblue;
  //border: 2px solid white;
  grid-auto-flow: dense;
  column-gap: 25px;
  column-gap: 35px;
  //border-radius: 4px;
  margin: 50px auto;
  padding: 15px;
  padding-left: 5px;
  line-break: strict;
  width: 50%;
`;

const StyledDd = styled.dd`
  //border-bottom: 2px dashed white;
  margin: 10px;
  //padding-bottom: 10px;
  //padding-left: 10px;
  padding: 10px;
  border-radius: 4px;
  border: 3px solid white;
  background-color: skyblue;
`;
