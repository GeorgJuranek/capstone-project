import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

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
      SetSavedOrders([{value: input.value, info: inputInfo}, ...savedOrders]); //input.value means the original string 1:1
      Form.reset();
    } //Get an empty string before it runs into analyzeSpell
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

      <Form onSubmit={handleSpell} role="form">
        <label htmlFor="input">
          <AriaOnlySpan>type in your command</AriaOnlySpan>
        </label>
        <Button> ❯ ❚ </Button>
        <Input id="input" name="input" autoComplete="off" />
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
