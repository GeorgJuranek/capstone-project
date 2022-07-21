import {nanoid} from 'nanoid';
import {useState, useRef} from 'react';
import styled from 'styled-components';

import MagicForm from '../components/MagicForm/MagicForm.js';
import MagicImage from '../components/MagicImage/MagicImage.js';
import MagicList from '../components/MagicList/MagicList.js';
import {mazeArray} from '../data/mazeArray.js';
import executeSpell from '../functions/executeSpell.js';
import findCommandMessage from '../functions/finder/findCommandMessage.js';
import findImage from '../functions/finder/findImage.js';
import findPosition from '../functions/finder/findPosition.js';

export default function Game() {
  const [currentPosition, setCurrentPosition] = useState(mazeArray[0]); //this holds a {object}
  const [savedOrders, setSavedOrders] = useState([]);
  const [isRoomEnlighten, setIsRoomEnlighten] = useState(false);
  const [triggerCurtain, setTriggerCurtain] = useState(false);

  const ref = useRef();

  let currentBackgroundImage = findImage(currentPosition); //this returns an object

  function changePosition(path) {
    const newPosition = findPosition(path);
    setCurrentPosition(newPosition);
    setTriggerCurtain(true);
    setIsRoomEnlighten(false); //this is NOT a toggle, changed to true only in changeEnlighten below
  }

  function changeTriggerCurtain() {
    setTriggerCurtain(false);
  }

  function changeEnlighten() {
    setIsRoomEnlighten(true); //this is NOT a toggle, changed to false only in changePosition above
  }

  function processingLatestSpell(instruction) {
    const treatedInstruction = instruction.trim().split(' ');
    const instructionValues = treatedInstruction.filter(inputUnit => inputUnit.length); //this is used later aswell
    const preparedInstruction = instructionValues.map(checkedInputPart => checkedInputPart.toLowerCase());

    const commandMessage = findCommandMessage(preparedInstruction[0]);
    const commandHasError = commandMessage.includes('ERROR');

    const spellEffects = executeSpell(preparedInstruction, currentPosition, changePosition, changeEnlighten);
    const {spellEffectMessage, spellEffectOutput, spellEffectHasError} = spellEffects;

    setSavedOrders([
      {
        id: nanoid(),
        instructionValues,
        commandMessage,
        commandHasError,
        spellEffectMessage,
        spellEffectOutput,
        spellEffectHasError,
      },
      ...savedOrders,
    ]);

    const List = ref.current;
    const bottomPos = List.offsetBottom;
    List.scrollTop = bottomPos;
  }

  return (
    <OrganizingMain>
      <TitleDiv>
        <LogoImg src={require('../images/logo1.png')} alt="" width="45" height="40" />
        <UnderlinedHeading> SHELL_WIZARD </UnderlinedHeading>
      </TitleDiv>

      <MagicImage
        currentPosition={currentPosition}
        currentBackgroundImage={currentBackgroundImage}
        isRoomEnlighten={isRoomEnlighten}
        triggerCurtain={triggerCurtain}
        changeTriggerCurtain={changeTriggerCurtain}
      />
      <ZshellDiv>
        <MagicList ref={ref} savedOrders={savedOrders} />
        <MagicForm savedOrders={savedOrders} processingLatestSpell={processingLatestSpell} />
      </ZshellDiv>
    </OrganizingMain>
  );
}

const TitleDiv = styled.div`
  position: relative;
  z-index: 5;
  margin-bottom: 10px;
  width: 100%;
`;

const UnderlinedHeading = styled.h1`
  text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black, -1px -1px 1px black;
  font-size: 15px;
  color: lightgrey;
  margin-left: 30px;
`;

const LogoImg = styled.img`
  position: absolute;
  left: -15px;
`;

const OrganizingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 30px;

  /* @media (orientation: landscape) {
    flex-direction: row;
  } */
`;

const ZshellDiv = styled.div`
  width: 90vw;
  max-width: 500px;
  height: 35vh;
  max-height: 800px;
  border: 2px ridge #181818;
  border-radius: 11px;
  background-image: linear-gradient(#181818, black);
  box-shadow: 0 10px 8px #888;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
