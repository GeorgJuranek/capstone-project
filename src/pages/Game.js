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
  const [isHiddenActive, setIsHiddenActive] = useState(false);

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

  function toggleFooter() {
    setIsHiddenActive(!isHiddenActive);
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
        <LogoOption
          onClick={() => toggleFooter()}
          src={isCancelActive ? logoCancel : logo}
          alt=""
          width="45"
          height="40"
        />
        <Title> SHELL_WIZARD </Title>
        {isHiddenActive && (
          <SecretFooter>
            <small>{'// ©@:georg_juranek '}</small>
          </SecretFooter>
        )}
        <CancelOption
          role="button"
          onClick={() => toggleCancel()}
          src={require('../images/cancel.png')}
          alt="Wanna Quit?"
          width="30"
          height="30"
        />
        <BookOption
          role="button"
          onClick={() => toggleBook()}
          src={require('../images/magicbook.png')}
          alt="Wanna get Info?"
          width={isBookActive ? '100px' : '30px'}
        />
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
  //
  width: 100vw;
  height: 100vh;
`;

const GameSceneDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (orientation: landscape) {
    flex-direction: row;
  }
  //
  gap: 10px;
  padding: 10px;
  min-width: 300px;
  width: auto; //90vw;
  max-width: 1500px;
  min-height: 300px;
  height: auto; //90vh; //auto; //90vh;
  max-height: 1000px;
`;

const ZshellDiv = styled.div`
  border: 2px ridge #181818;
  border-radius: 11px;
  background-image: linear-gradient(#181818, black);
  box-shadow: 0 10px 8px #888;
  display: flex;
  flex-direction: column;
  //
  //justify-content: space-around;
  width: 50%;
  min-height: 300px;
  margin: auto;
  max-height: 80%;
`;

//Header-Elements//
const Header = styled.header`
  position: relative;
  z-index: 3;
  text-align: center;
  border-bottom: 3px double black;
  width: 90%;
`;

const Title = styled.h1`
  text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black, -1px -1px 1px black;
  font-size: 15px;
  color: lightgrey;
  margin-right: 5rem;
`;

const LogoOption = styled.img`
  position: absolute;
  left: auto;
  top: 5px;
`;

const CancelOption = styled.img`
  position: fixed;
  left: 7px;
  top: 10px;
`;

const BookOption = styled.img`
  position: fixed;
  right: 7px;
  top: 7px;
  width: ${props => props.isBookActive};
`;

//easteregg
const SecretFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 1em;
  color: grey;
`;
