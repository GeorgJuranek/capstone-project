import {useState, useRef} from 'react';
import styled from 'styled-components';

import MagicForm from './components/MagicForm/MagicForm';
import MagicList from './components/MagicList/MagicList.js';
import {CodeSpan} from './components/Stylesheet/StyledSpans.js';
import findSpellMessage from './functionsfolder/findSpellMessage.js';

export default function App() {
  // State // for the archived Spells
  const [savedOrders, setSavedOrders] = useState([]);

  //useRef is used here to find the MagicList at the End of following saveSpellOrder-function
  const ref = useRef();

  // SAVE SPELL ORDER // checks the Input.value from MagicForm and sends back and to: MagicList //
  function saveSpellOrder(spellword) {
    //
    const checkedInput = spellword.trim().toLowerCase();
    const inputInfo = findSpellMessage(checkedInput);
    console.log('InputInfo2: ', inputInfo);
    const hasError = inputInfo.includes('ERROR'); //the error-prop is used to make specific text red, the string can tell if error has happened
    setSavedOrders([{value: spellword, info: inputInfo, error: hasError}, ...savedOrders]);

    // The following parts set the scrollingPosition inside the List to bottom on new entry:
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
          Information about this specific command in the zshell:{' '}
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
