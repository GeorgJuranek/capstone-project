import {nanoid} from 'nanoid';
import {useState, useRef} from 'react';
import styled from 'styled-components';

import Book from '../components/Book/Book.js';
import Cancel from '../components/Cancel/Cancel.js';
import MagicForm from '../components/MagicForm/MagicForm.js';
import MagicImage from '../components/MagicImage/MagicImage.js';
import MagicList from '../components/MagicList/MagicList.js';
import {mazeArray} from '../data/mazeArray.js';
import executeSpell from '../functions/executeSpell.js';
import findCommandMessage from '../functions/finder/findCommandMessage.js';
import findImage from '../functions/finder/findImage.js';
import findPosition from '../functions/finder/findPosition.js';
import logo from '../images/logo.png';
import logoCancel from '../images/logoCancel.png';

export default function Game() {
  const [currentPosition, setCurrentPosition] = useState(mazeArray[0]); //this holds a {object}
  const [savedOrders, setSavedOrders] = useState([
    {
      id: nanoid(),
      instructionValues: '',
      commandMessage: 'Initialised Shell_Wizard',
      commandHasError: false,
      spellEffectMessage:
        'welcome to your exam. Shell_wizard is a game to learn the commands of the zShell. This is your exam on wizard school, good luck fellow!',
      spellEffectOutput: 'maze/home/',
      spellEffectHasError: false,
    },
  ]);
  const [currentFocus, setCurrentFocus] = useState(null); //?still necessary?
  const [isRoomEnlighten, setIsRoomEnlighten] = useState(false);
  const [triggerCurtain, setTriggerCurtain] = useState(false);
  const [isCancelActive, setIsCancelActive] = useState(false);
  const [isBookActive, SetIsBookActive] = useState(false);

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

  function changeCurrentFocus(newFocus) {
    setCurrentFocus(newFocus);
  }

  function toggleCancel() {
    setIsCancelActive(!isCancelActive);
    setCurrentFocus(null);
  }

  function toggleBook() {
    SetIsBookActive(!isBookActive);
    setCurrentFocus(null);
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
      <Header>
        <Title>
          SHELL
          <LogoOption src={isCancelActive ? logoCancel : logo} alt="" width="30" height="25" />
          WIZARD
        </Title>
        <CancelOption onClick={() => toggleCancel()}>
          <img src={require('../images/cancel.png')} alt="Wanna Quit?" width="30" height="30" />
        </CancelOption>
        <BookOption onClick={() => toggleBook()}>
          <img src={require('../images/magicbook.png')} alt="Wanna get Info?" width={isBookActive ? '100px' : '30px'} />
        </BookOption>
      </Header>
      <GameSceneDiv>
        <MagicImage
          currentPosition={currentPosition}
          currentBackgroundImage={currentBackgroundImage}
          isRoomEnlighten={isRoomEnlighten}
          triggerCurtain={triggerCurtain}
          changeTriggerCurtain={changeTriggerCurtain}
          //
        />
        <ZshellDiv>
          <MagicList ref={ref} savedOrders={savedOrders} />
          <MagicForm
            savedOrders={savedOrders}
            processingLatestSpell={processingLatestSpell}
            currentFocus={currentFocus}
            changeCurrentFocus={changeCurrentFocus}
          />
        </ZshellDiv>
        {isCancelActive && <Cancel toggleCancel={toggleCancel} />}
        {isBookActive && <Book toggleBook={toggleBook} />}
      </GameSceneDiv>
    </OrganizingMain>
  );
}

//Structuring Wrapper//
const OrganizingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const GameSceneDiv = styled.div`
  gap: 3px;
  min-width: 300px;
  width: auto;
  max-width: 1500px;
  min-height: 300px;
  height: auto;
  max-height: 1000px;
  display: flex;
  flex-direction: column;

  @media (orientation: landscape) {
    flex-direction: row;
    padding: 2px;
    gap: 2%;
  }
`;

const ZshellDiv = styled.div`
  border: 2px ridge #181818;
  border-radius: 11px;
  background-image: linear-gradient(#181818, black);
  box-shadow: 0 10px 8px #888;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
  height: 220px;

  @media (orientation: landscape) {
    width: 55%;
    height: 70%;
  }
`;

//Header-Elements//
const Header = styled.header`
  position: relative;
  z-index: 3;
  text-align: center;
  background-color: grey;
  width: 100%;
`;

const Title = styled.h1`
  text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black, -1px -1px 1px black;
  font-size: 15px;
  color: lightgrey;
  position: relative;
  left: auto;
  top: -5px;
  border: 3px double black;
  border-radius: 12px;
  background-color: darkgrey;
  margin: 10px auto;
  width: 10rem;
`;

const LogoOption = styled.img`
  display: inline;
`;

const CancelOption = styled.button`
  position: fixed;
  left: 7px;
  top: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
`;

const BookOption = styled.button`
  position: fixed;
  right: 7px;
  top: 7px;
  padding: 0;
  border: none;
  background-color: transparent;
  width: ${props => props.isBookActive};
`;
