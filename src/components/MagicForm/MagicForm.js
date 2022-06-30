//import {nanoid} from 'nanoid';
//import {useState} from 'react';
import styled from 'styled-components';

import {AriaOnlySpan} from '../Stylesheet/StyledSpans.js';

export default function MagicForm({saveSpellOrder, savedOrders}) {
  function handleSpell(event) {
    event.preventDefault();
    const Form = event.target;
    const {input} = Form.elements;
    // Input is already trimmed() here!

    if (input.value.length > 0) {
      saveSpellOrder(input.value);
      Form.reset();
    } else {
      input.focus();
    }
    //
  }

  //const ref = useRef();

  return (
    <Form onSubmit={handleSpell} role="form">
      <label htmlFor="input">
        <AriaOnlySpan>type in your command</AriaOnlySpan>
      </label>
      <CommandLineSpanL> ❯ ❚ </CommandLineSpanL>
      <Input id="input" name="input" autoComplete="off" />
      <CommandLineSpanR> ? {savedOrders.length} </CommandLineSpanR>
      <Button role="button">ENTER</Button>
    </Form>
  );
}

const Form = styled.form`
  //position: relative;
  display: flex;
  justify-content: flex-start;
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
  padding-left: 1em;
`;

const CommandLineSpanR = styled.span`
  white-space: nowrap;
  color: #65ff00;
  padding-right: 1em;
`;

const Button = styled.button`
  background-color: red;
  position: absolute;
  right: 10%;
  top: 100px;
`;

/* const Button = styled.button`
  white-space: nowrap;
  //border: none;
  background-color: red; //black;
  color: #65ff00;
  position: absolute;
  right: 25%;
  bottom: -10px;
`; */

//<img src="./../images/ShellWizardLogo1.png" alt="Enter" width="200px" height="200px" />
