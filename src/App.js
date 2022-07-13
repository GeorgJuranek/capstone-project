import {nanoid} from 'nanoid';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

import {mazeArray} from './arrays/mazeArray.js';
import MagicForm from './components/MagicForm/MagicForm.js';
import MagicImage from './components/MagicImage/MagicImage.js';
import MagicList from './components/MagicList/MagicList.js';
import executeSpell from './functionsfolder/executeSpell.js';
import findCommandMessage from './functionsfolder/findCommandMessage.js';
import mazeEnd from './images/mazeRooms/mazeEnd.png';
import mazeWay from './images/mazeRooms/mazeWay.png';
import {CodeSpan} from './stylesheet/StyledSpans.js';

export default function App() {
  const [currentPosition, setCurrentPosition] = useState(mazeArray[0]); //this holds a {object}
  const [savedOrders, setSavedOrders] = useState([]);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState({image: mazeEnd, altText: 'you start here'});
  const [isRoomEnlighten, setIsRoomEnlighten] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (currentPosition.type === 'start' || currentPosition.type === 'end') {
      setCurrentBackgroundImage({image: mazeEnd, altText: 'the end of the way'});
    } else {
      setCurrentBackgroundImage({image: mazeWay, altText: 'a lonely and spooky corridor'});
    }
  }, [currentPosition]);

  function changePosition(path) {
    const newPosition = mazeArray.find(mazeRoom => mazeRoom.path === path);
    setCurrentPosition(newPosition);
    setIsRoomEnlighten(false); //this is NOT a toggle, changed to true only in changeEnlighten below
  }

  function changeEnlighten() {
    setIsRoomEnlighten(true); //this is NOT a toggle, changed to false only in changePosition above
  }

  function processingLatestSpell(input) {
    const treatedInput = input.trim().split(' ');
    const displayedInput = treatedInput.filter(inputUnit => inputUnit.length > 0); //this is used later aswell
    const preparedInput = displayedInput.map(checkedInputPart => checkedInputPart.toLowerCase());

    const commandMessage = findCommandMessage(preparedInput[0]);
    const commandHasError = commandMessage.includes('ERROR');

    const spellEffects = executeSpell(preparedInput, currentPosition, changePosition, changeEnlighten);
    const {spellEffectMessage, spellEffectOutput, spellEffectHasError} = spellEffects;

    setSavedOrders([
      {
        id: nanoid(),
        inputValues: displayedInput,
        commandMessage: commandMessage,
        commandHasError: commandHasError,
        spellEffectMessage: spellEffectMessage,
        spellEffectOutput: spellEffectOutput,
        spellEffectHasError: spellEffectHasError,
      },
      ...savedOrders,
    ]);

    const List = ref.current;
    const topPos = List.offsetTop;
    List.scrollTop = topPos;
  }

  return (
    <OrganizingMain>
      <LogoImg src={require('./images/logo1.png')} alt="" width="125" height="125" />
      <h1>
        <u>SHELL_WIZARD</u>
      </h1>
      With this App you can learn about your first steps with the zshell (what you want to learn, if you want to learn
      how to code!)
      <br />
      You are a Wizard searching for wisdom in the inner depths of a cursed maze. Your only chance to find your way
      through this, is to type in Spells (that resemble the zShell-commands) to the textfield in the area below.
      <ol>
        <li>
          <CodeSpan>pwd</CodeSpan> - to check on your current position.
        </li>
        <li>
          <CodeSpan>ls</CodeSpan> - to find new rooms. A second argument is optional.
        </li>
        <li>
          <CodeSpan>cd</CodeSpan> - to move from one room to another. A second argument is required.
        </li>
      </ol>
      If done right, each of these spells will summon a magical gift that will help you on your journey...
      <MagicImage currentBackgroundImage={currentBackgroundImage} isRoomEnlighten={isRoomEnlighten} />
      <ZshellDiv>
        <MagicList ref={ref} savedOrders={savedOrders} />
        <MagicForm savedOrders={savedOrders} processingLatestSpell={processingLatestSpell} />
      </ZshellDiv>
    </OrganizingMain>
  );
}

const OrganizingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;
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
