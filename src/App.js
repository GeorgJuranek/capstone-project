import styled from 'styled-components';

import MagicForm from './components/MagicForm/MagicForm';
import {CodeSpan} from './components/Stylesheet/StyledSpans.js';

export default function App() {
  //
  function analyzeSpell(spellword) {
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
      <MagicForm analyzeSpell={analyzeSpell} />
    </OrganizingMain>
  );
}

const OrganizingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSection = styled.section`
  max-width: 50vw;
`;
