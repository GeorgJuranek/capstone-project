import styled from 'styled-components';

import MagicForm from './components/MagicForm/MagicForm';

export default function App() {
  //
  function saySpell(spellword) {
    console.log('The Spellword is: ', spellword);
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
          Please type in <SpanCode>pwd</SpanCode>, <SpanCode>ls</SpanCode> or <SpanCode>cd</SpanCode> to get further
          Information about this specific command in the zshell:{' '}
        </p>
      </StyledSection>
      <MagicForm saySpell={saySpell} />
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

const SpanCode = styled.span`
  color: white;
  background-color: grey;
  padding: 3px;
  border-radius: 20%;
`;
