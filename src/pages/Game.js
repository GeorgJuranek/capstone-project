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
      <LogoImg src={require('../images/logo1.png')} alt="" width="125" height="125" />
      <UnderlinedHeading> SHELL_WIZARD </UnderlinedHeading>
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

const UnderlinedHeading = styled.h1`
  text-decoration: underline;
`;

const OrganizingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1% 3% 1%;
`;

const ZshellDiv = styled.div`
  width: 90vw;
  max-width: 800px;
  height: auto;
  max-height: 500px;
  border: 2px ridge #181818;
  border-radius: 5%;
  background-image: linear-gradient(#181818, black);
  box-shadow: 0 10px 8px #888;
`;

const LogoImg = styled.img`
  position: relative;
  right: 5px;
  top: 45px;
  z-index: -1;
`;
