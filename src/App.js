import {nanoid} from 'nanoid';
import {useState, useRef} from 'react';
import styled from 'styled-components';

import {mazeArray} from './arrays/mazeArray.js';
import MagicForm from './components/MagicForm/MagicForm';
import MagicList from './components/MagicList/MagicList.js';
import {CodeSpan} from './components/Stylesheet/StyledSpans.js';
import executeSpell from './functionsfolder/executeSpell.js';
import findCommandMessage from './functionsfolder/findCommandMessage.js';

export default function App() {
  const [currentArrayPosition, setCurrentArrayPosition] = useState(mazeArray[0]); //in the Array are Objects, this is actually a big object

  //
  function changePosition(newPositionAsString) {
    const newPositionAsObject = mazeArray.find(mazeRoom => mazeRoom.path === newPositionAsString);
    setCurrentArrayPosition(newPositionAsObject);
  }

  //

  const [savedOrders, setSavedOrders] = useState([]);

  const ref = useRef();

  function saveSpellOrder(input) {
    const trimmedInputAsArray = input.trim().split(' ');
    const filteredTrimmedInputAsArray = trimmedInputAsArray.filter(InputUnit => InputUnit.length > 0); //this is used later aswell
    const preparedInputAsArray = filteredTrimmedInputAsArray.map(checkedInputPart => checkedInputPart.toLowerCase());

    const commandMessage = findCommandMessage(preparedInputAsArray[0]);
    const commandHasError = commandMessage.includes('ERROR');
    //
    const spellEffects = executeSpell(preparedInputAsArray, currentArrayPosition, changePosition);
    const {spellEffectMessage, spellEffectOutput, spellEffectHasError} = spellEffects;
    //
    setSavedOrders([
      {
        id: nanoid(),
        inputValues: filteredTrimmedInputAsArray,
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
      <StyledDiv>
        <p>
          With this App you can learn about your first steps with the zshell (what you want to learn, if you want to
          learn how to code!)
        </p>

        <p>
          You are a Wizard searching for wisdom in the inner depths of a cursed maze. Your only chance to find your way
          through this, is to type in Spells (that resemble the zShell-commands) to the textfield in the area below.
        </p>

        <ol>
          <li>
            <p>
              <CodeSpan>pwd</CodeSpan> - to check on your current position.
            </p>
          </li>
          <li>
            <p>
              <CodeSpan>ls</CodeSpan> - to find new rooms. A second argument is optional.
            </p>
          </li>
          <li>
            <p>
              <CodeSpan>cd</CodeSpan> - to move from one room to another. A second argument is required.
            </p>
          </li>
        </ol>

        <p>If done right, each of these spells will summon a magical gift that will help you on your path...</p>
      </StyledDiv>

      <ZshellDiv>
        <MagicList ref={ref} savedOrders={savedOrders} />
        <MagicForm savedOrders={savedOrders} saveSpellOrder={saveSpellOrder} />
      </ZshellDiv>
    </OrganizingMain>
  );
}

const OrganizingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ZshellDiv = styled.div`
  width: 85vw;
  max-width: 500px;
  height: auto;
  max-height: 500px;
  border: 2px ridge #181818;
  border-radius: 5%;
  margin: 1em 0;
  background-image: linear-gradient(#181818, black);
  box-shadow: 0 10px 8px #888;
`;

const StyledDiv = styled.div`
  width: 75vw;
  max-width: 500px;
`;

const LogoImg = styled.img`
  position: relative;
  right: 5px;
  top: 45px;
  z-index: -1;
`;
