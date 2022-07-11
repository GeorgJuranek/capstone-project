import styled from 'styled-components';

import {ScreenReaderOnlySpan, FrameSpan} from '../../stylesheet/StyledSpans.js';

export default function MagicForm({processingLatestSpell, savedOrders}) {
  function handleSpell(event) {
    event.preventDefault();
    const form = event.target;
    const {input} = form.elements;

    if (input.value.length > 0) {
      processingLatestSpell(input.value);
      form.reset();
    }

    input.focus();
  }

  return (
    <Form onSubmit={handleSpell}>
      <label htmlFor="input">
        <ScreenReaderOnlySpan>type in your command</ScreenReaderOnlySpan>
      </label>
      <CommandLineSpanL>❯ ❚ </CommandLineSpanL>
      <Input id="input" name="input" autoComplete="off" />
      <Button>ENTER</Button>
      <CommandLineSpanR>
        <FrameSpan>?</FrameSpan> {savedOrders.length}
      </CommandLineSpanR>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: nowrap;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 90%;
  border: none;
  color: #65ff00;
  background-color: black;
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
  padding: 5px 2% 0 2%;
  margin: 0 3%;

  &:active {
    background-color: black;
    border: medium solid white;
    color: white;
  }
`;
