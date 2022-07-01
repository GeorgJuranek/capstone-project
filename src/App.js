import {useState} from 'react';
import styled from 'styled-components';

import MagicForm from './components/MagicForm/MagicForm';
import MagicList from './components/MagicList/MagicList.js';
import {CodeSpan} from './components/Stylesheet/StyledSpans.js';

export default function App() {
  // State // for the archived Spells
  const [savedOrders, setSavedOrders] = useState([]);

  //const ref = useRef();
  //useRef is used here to find the MagicList at the End of following saveSpellOrder-function
  //But this doesnt work. I correctly imported it (please see long comment below)

  // ANALYZE SPELL // checks the Input.value from MagicForm and sends back and to: MagicList //
  function saveSpellOrder(spellword) {
    //
    const trimmedInput = spellword.trim();
    const checkedInput = trimmedInput.toLowerCase();
    const inputInfo = findSpellMessage(checkedInput);
    const hasError = inputInfo.includes('ERROR'); //the error-prop is used to make specific text red, the string can tell if error has happened
    setSavedOrders([{value: spellword, info: inputInfo, error: hasError}, ...savedOrders]);

    // The following parts set the scrollingPosition inside the List to bottom on new entry:
    // I was told to use "ref.current.querySelector('>ul')" for "document.querySelector('[role="list"]')"
    // but the List cant be found by this, so i will go on with my former solution
    //But if you are reading this and have an idea how to use useRef here correctly let me know. Thx
    const List = document.querySelector('[role="list"]'); //ref.current.querySelector('>ul'); //
    const topPos = List.offsetTop;
    List.scrollTop = topPos;
  }

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
        <MagicList savedOrders={savedOrders} />
        <MagicForm savedOrders={savedOrders} saveSpellOrder={saveSpellOrder} />
      </ZshellDiv>
    </OrganizingMain>
  );
}
// I tried "ref={ref}" as property on ZshellDiv and MagicList (MagicList is what i search for)
// Problem in console says that "function components cannot be given refs", but
//how shall i pass this if not like this?

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
