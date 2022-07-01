import {useState, useRef} from 'react';
import styled from 'styled-components';

import MagicForm from './components/MagicForm/MagicForm';
import MagicList from './components/MagicList/MagicList.js';
import {CodeSpan} from './components/Stylesheet/StyledSpans.js';

export default function App() {
  // State // for the archived Spells
  const [savedOrders, setSavedOrders] = useState([]);

  // ANALYZE SPELL // checks the Input.value from MagicForm and sends back and to: MagicList //
  function saveSpellOrder(spellword) {
    //
    const trimmedInput = spellword.trim();
    const checkedInput = trimmedInput.toLowerCase();
    const inputInfo = findSpellMessage(checkedInput);
    const hasError = inputInfo.includes('ERROR'); //the error-prop is used to make specific text red, the string can tell if error has happened
    setSavedOrders([{value: spellword, info: inputInfo, error: hasError}, ...savedOrders]);

    // This parts set the scrollingPosition inside the List to bottom on new entry
    const List = ref.current.querySelector('>ul'); //document.querySelector('[role="list"]'); //
    const topPos = List.offsetTop;
    List.scrollTop = topPos;
  }
  // useRef is used here to find the MagicList at the End of following saveSpellOrder-function
  const ref = useRef();

  // ↑ FIND SPELL MESSAGE // is called within analyzeSpell to return a fitting string //
  function findSpellMessage(spellword) {
    if (spellword === 'cd') {
      return 'The command "cd" stands for "change directory", so you can jump from one directory in another one. This is so important. ';
    } else if (spellword === 'ls') {
      return ' The command "ls" stands for "list items", it shows you all directories and data, that are stored in the directory you are in right now and are not hidden.';
    } else if (spellword === 'pwd') {
      return ' The command "pwd" stands for "print working directory", this means that you can ask for your current position and it will tell you the directory you are in right now. ';
    } else {
      return '(!) ERROR: please check if you spelled the command correctly, coding is really strict and otherwise it will not work.';
    }
  }

  return (
    <OrganizingMain>
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
        <MagicList savedOrders={savedOrders} ref={ref} />
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
  box-shadow: 0px 10px 8px #888888;
`;

const StyledSection = styled.section`
  max-width: 50vw;
`;
