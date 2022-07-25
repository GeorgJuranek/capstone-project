import styled from 'styled-components';
import {keyframes} from 'styled-components';

import {ScreenReaderOnlySpan, FrameSpan} from '../../stylesheet/StyledSpans.js';

export default function MagicForm({processingLatestSpell, savedOrders, currentFocus, changeCurrentFocus}) {
  function handleSpell(event) {
    event.preventDefault();
    const form = event.target;
    const {input} = form.elements;

    if (input.value.length > 0) {
      processingLatestSpell(input.value);
      form.reset();
    }

    input.focus();
    changeCurrentFocus(input);
  }

  function changeFocus(event) {
    const newFocus = event.target;
    newFocus.focus();
    changeCurrentFocus(newFocus);
  }

  return (
    <>
      <Form onSubmit={handleSpell}>
        <label htmlFor="input">
          <ScreenReaderOnlySpan>type in your command</ScreenReaderOnlySpan>
        </label>
        <CommandLineSpanL>
          ❯{currentFocus === document.activeElement ? <ToggleSpan>❙</ToggleSpan> : '⫿'}
        </CommandLineSpanL>
        <Input onClick={changeFocus} id="input" name="input" autoComplete="off" />

        <CommandLineSpanR>
          <FrameSpan>?</FrameSpan> <span data-testid="savedOrders">{savedOrders.length}</span>
        </CommandLineSpanR>
        <ButtonDiv>
          <Button onClick={changeFocus}>ENTER</Button>
        </ButtonDiv>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: wrap;
`;

const Input = styled.input`
  width: auto;
  border: none;
  color: #65ff00;
  background-color: black;
  outline: none;
  overflow: hidden;
`;

const CommandLineSpanL = styled.span`
  white-space: nowrap;
  color: #65ff00;
`;

const CommandLineSpanR = styled.span`
  white-space: nowrap;
  color: #65ff00;
  margin-left: auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Button = styled.button`
  background-color: #65ff00;
  border: medium solid #65ff00;
  padding: 0 25px;
  margin: 0 5px;

  &:active {
    background-color: black;
    border: medium solid white;
    color: white;
  }
`;

//Animation ❙
const onOffAnim = keyframes`
          0%{opacity:1;}
          50%{opacity:1}
          51%{opacity:0}
          100%{opacity:0;}
    `;
const ToggleSpan = styled.span`
  animation-name: ${onOffAnim};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  position: relative;
`;
