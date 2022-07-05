import {nanoid} from 'nanoid';
import {useState, useRef} from 'react';
import styled from 'styled-components';

import {mazeArray} from './arrays/mazeArray.js';
import MagicForm from './components/MagicForm/MagicForm';
import MagicList from './components/MagicList/MagicList.js';
import {CodeSpan} from './components/Stylesheet/StyledSpans.js';
import executeSpell from './functionsfolder/executeSpell.js';
import findSpellMessage from './functionsfolder/findSpellMessage.js';

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

  function saveSpellOrder(spellword) {
    const checkedInput = spellword.trim().toLowerCase();
    const checkedInputAsArray = checkedInput.split(' ');
    const inputInfo = findSpellMessage(checkedInputAsArray[0]);
    const hasError = inputInfo.includes('ERROR');
    //
    const inputEffects = executeSpell(checkedInputAsArray, currentArrayPosition, changePosition);
    const {spellEffectMessage, spellEffectOutput, spellEffectHasError} = inputEffects;
    //
    setSavedOrders([
      {
        id: nanoid(),
        value: spellword,
        info: inputInfo,
        error: hasError,
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
      <StyledSection>
        <p>
          With this App you can learn about your first steps with the zshell (what you want to learn, if you want to
          learn how to code!)
        </p>
        <p>
          Please type in <CodeSpan>pwd</CodeSpan>, <CodeSpan>ls</CodeSpan> or <CodeSpan>cd</CodeSpan> to get further
          Information about this specific command in the zshell:
        </p>
      </StyledSection>

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

const StyledSection = styled.section`
  max-width: 50vw;
`;

const LogoImg = styled.img`
  position: relative;
  right: 5px;
  top: 45px;
  z-index: -1;
`;
