import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

export default function MagicForm({saySpell}) {
  const [savedOrders, SetSavedOrders] = useState([]);

  function handleSpell(event) {
    event.preventDefault();
    const Form = event.target;
    const {input} = Form.elements;
    //Is it automatically trimmed here? because trim() makes no difference

    if (input.value.length > 0) {
      const inputInfo = analyzeSpell(input.value);
      SetSavedOrders([{value: input.value, info: inputInfo}, ...savedOrders]);
      saySpell(input.value); //this makes a console.log in the app
      Form.reset();
    } //Get an empty string before it runs into analyzeSpell and saySpell
    else {
      SetSavedOrders([
        {
          value: '...oh nothing?',
          info: 'Did you fell on your enter-button? you have to type in the commands to get information about zshell!',
        },
        ...savedOrders,
      ]);
    }
  }

  function analyzeSpell(spellword) {
    if (spellword === 'cd') {
      return 'The command "cd" stands for "change directory", so you can jump from one directory in another one. This is so important. ';
    } else if (spellword === 'ls') {
      return ' The command "ls" stands for "list items", it shows you all directories and data, that are stored in the directory you are in right now and are not hidden.';
    } else if (spellword === 'pwd') {
      return ' The command "pwd" stands for "print working directory", this means that you can ask for your current position and it will tell you the directory you are in right now. ';
    } else {
      return '(!)>>> ERROR: please check if you spelled the command correctly, coding is really strict and otherwise it will not work.';
    }
  }

  return (
    <OrganizingDiv>
      <SavedOrdersList role="list">
        {savedOrders.map(order => (
          <SavedOrderListitem key={nanoid()}>
            <AriaOnlySpan>you</AriaOnlySpan>
            typed in: {order.value}
            <p>{order.info}</p>
          </SavedOrderListitem>
        ))}
      </SavedOrdersList>

      <Form onSubmit={handleSpell}>
        <label htmlFor="input">
          <AriaOnlySpan>type in your command</AriaOnlySpan>
        </label>
        <Button> ❯ ❚ </Button>
        <Input id="input" name="input" />
      </Form>
    </OrganizingDiv>
  );
}

const OrganizingDiv = styled.div`
  width: 65vw;
  max-width: 500px;
  height: auto;
  max-height: 500px;
  border: 1px solid black;
  border-radius: 5%;
`;

const SavedOrdersList = styled.ul`
  border: 1px solid black;
  list-style-type: 'you ';
  height: 50vw;
  max-height: 400px;
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const SavedOrderListitem = styled.li`
  word-wrap: break-word;
  padding-top: 1rem;
  border-top: 2px solid black;
`;

const Input = styled.input`
  width: 90%;
`;

const Button = styled.button`
  background: none;
  white-space: nowrap;
`;

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 1rem;
`;

const AriaOnlySpan = styled.span`
  /*This is the sr-only class from tailwindcss*/
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
