import {useState} from 'react';
import styled from 'styled-components';

import {ScreenReaderOnlySpan, FrameSpan} from '../../stylesheet/StyledSpans.js';

export default function MagicForm({processingLatestSpell, savedOrders}) {
  const [currentFocus, setCurrentFocus] = useState();

  function handleSpell(event) {
    event.preventDefault();
    const form = event.target;
    const {input} = form.elements;

    if (input.value.length > 0) {
      processingLatestSpell(input.value);
      form.reset();
    }

    input.focus();
    setCurrentFocus(input);

    /*const focus = document.activeElement;
    if (focus === input) {
      focus.blur();
      setCurrentFocus(null);
    } else {
      input.focus();
      setCurrentFocus(input);
    }*/
  }

  function changeFocus(event) {
    const newFocus = event.target;
    newFocus.focus();
    setCurrentFocus(newFocus);
  }

  return (
    <Form onSubmit={handleSpell}>
      <label htmlFor="input">
        <ScreenReaderOnlySpan>type in your command</ScreenReaderOnlySpan>
      </label>
      <CommandLineSpanL>❯ {currentFocus === document.activeElement ? '❚' : '▯'}</CommandLineSpanL>
      <Input onClick={changeFocus} id="input" name="input" autoComplete="off" />
      <Button>ENTER</Button>
      <CommandLineSpanR>
        <FrameSpan>?</FrameSpan> <span data-testid="savedOrders">{savedOrders.length}</span>
      </CommandLineSpanR>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: nowrap;
`;

const Input = styled.input`
  width: 90%;
  border: none;
  color: #65ff00;
  background-color: black;
  outline: none;
`;

const CommandLineSpanL = styled.span`
  white-space: nowrap;
  color: #65ff00;
`;

const CommandLineSpanR = styled.span`
  white-space: nowrap;
  color: #65ff00;
  margin-right: 3%;
`;

const Button = styled.button`
  background-color: #65ff00;
  border: medium solid #65ff00;
  padding: 0 2% 0 2%;
  margin: 0 3%;

  &:active {
    background-color: black;
    border: medium solid white;
    color: white;
  }
`;
