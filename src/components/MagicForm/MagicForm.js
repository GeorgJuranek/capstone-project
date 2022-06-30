//import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import MagicList from '../MagicList/MagicList.js';
import {AriaOnlySpan} from '../Stylesheet/StyledSpans.js';

export default function MagicForm({analyzeSpell}) {
  const [savedOrders, SetSavedOrders] = useState([]);

  function handleSpell(event) {
    event.preventDefault();
    const Form = event.target;
    const {input} = Form.elements;
    //is already trimmed() here
    const checkedInput = input.value.toLowerCase();
    if (checkedInput.length > 0) {
      const inputInfo = analyzeSpell(checkedInput);
      const hasError = inputInfo.includes('ERROR'); //the error-prop is used to make specific text red, the string can tell if error has happened
      SetSavedOrders([{value: input.value, info: inputInfo, error: hasError}, ...savedOrders]); //input.value means the original string 1:1
      Form.reset();
    } //Fish for empty string before it runs into analyzeSpell
    else {
      /* SetSavedOrders([
        {
          value: '...oh nothing?',
          info: 'Did you fell on your enter-button? you have to type in the commands to get information about zshell!',
          error: true,
        },
        ...savedOrders,
      ]); */
      input.focus();
    }
    // This parts set the scrollingPosition inside the List to bottom on new entry
    const List = document.querySelector('[role="list"]');
    const topPos = List.offsetTop;
    List.scrollTop = topPos;
  }

  return (
    <OrganizingDiv>
      <MagicList savedOrders={savedOrders} />

      <Form onSubmit={handleSpell} role="form">
        <label htmlFor="input">
          <AriaOnlySpan>type in your command</AriaOnlySpan>
        </label>
        <Button role="button"> ❯ ❚ </Button>
        <Input id="input" name="input" autoComplete="off" />
        <Button role="button"> ? {savedOrders.length} </Button>
      </Form>
    </OrganizingDiv>
  );
}

const OrganizingDiv = styled.div`
  width: 85vw;
  max-width: 500px;
  height: auto;
  max-height: 500px;
  border: 2px ridge #181818;
  border-radius: 5%;
  margin: 1em 0;
  //background-color: #181818;
  background-image: linear-gradient(#181818, black);
  box-shadow: 0px 10px 8px #888888;
`;

const Input = styled.input`
  width: 90%;
  //background-color: #181818;
  border: none;
  color: #65ff00;
  background-color: black;
  outline: none;
`;

const Button = styled.button`
  white-space: nowrap;
  border: none;
  //background: none;
  background-color: black;
  color: #65ff00;
`;

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 1rem;
`;
