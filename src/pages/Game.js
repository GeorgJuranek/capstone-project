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
  const [savedOrders, setSavedOrders] = useState([]);
  const [currentFocus, setCurrentFocus] = useState(null);
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
  max-width: 500px;
  margin: 0 auto;
  padding: 0 30px;
`;

const GameSceneDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (orientation: landscape) {
    flex-direction: row;
  } ;
`;

const ZshellDiv = styled.div`
  width: 90vw;
  max-width: 500px;
  height: 35vh;
  max-height: 700px;
  border: 2px ridge #181818;
  border-radius: 11px;
  background-image: linear-gradient(#181818, black);
  box-shadow: 0 10px 8px #888;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (orientation: landscape) {
    height: 80vh;
    max-width: 1300px;
    width: 80vw;
    margin-top: 5%;
    margin-left: 50%;
  } ;
`;

//Header-Elements//
const Header = styled.header`
  position: relative;
  z-index: 3;
  width: 90%;
  text-align: center;
  border-bottom: 3px double black;
`;

const Title = styled.h1`
  text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black, -1px -1px 1px black;
  font-size: 15px;
  color: lightgrey;
  margin-left: auto;
`;

const LogoOption = styled.img`
  position: absolute;
  left: 63%;
  top: 5px;
  margin-left: 5px;
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
  height: auto;
`;

//easteregg
const SecretFooter = styled.footer`
  position: fixed;
  bottom: 2px;
  right: auto;
  white-space: nowrap;
  color: black;
  z-index: -1;
`;
