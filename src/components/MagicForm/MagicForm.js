//import {nanoid} from 'nanoid';
//import {useState} from 'react';
import styled from 'styled-components';

import {AriaOnlySpan, FrameSpan} from '../Stylesheet/StyledSpans.js';

export default function MagicForm({saveSpellOrder, savedOrders}) {
  function handleSpell(event) {
    event.preventDefault();
    const Form = event.target;
    const {input} = Form.elements;

    if (input.value.length > 0) {
      saveSpellOrder(input.value);
      Form.reset();
    }

    input.focus();
  }

  return (
    <Form onSubmit={handleSpell} role="form">
      <label htmlFor="input">
        <AriaOnlySpan>type in your command</AriaOnlySpan>
      </label>
      <CommandLineSpanL>❯ ❚ </CommandLineSpanL>
      <Input id="input" name="input" autoComplete="off" />
      <Button role="button" name="button">
        ENTER
      </Button>
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
  outline: none;
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
