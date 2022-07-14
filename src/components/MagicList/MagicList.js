import {nanoid} from 'nanoid';
import {forwardRef} from 'react';
import styled from 'styled-components';

import {ScreenReaderOnlySpan, ColorSpan, ErrorChangesColorSpan} from '../../stylesheet/StyledSpans.js';

const MagicList = forwardRef(({savedOrders}, ref) => {
  //
  function createChoices(orderOutputs) {
    return orderOutputs.map(spellEffectEntry => (
      <ChoiceSpan key={nanoid()} isItem={spellEffectEntry.includes('.')}>
        {spellEffectEntry}
      </ChoiceSpan>
    ));
  }

  return (
    <SavedOrdersList ref={ref} role="list">
      {savedOrders.map(order => (
        <SavedOrderListItem key={order.id}>
          <ScreenReaderOnlySpan>you</ScreenReaderOnlySpan>
          <ColorSpan>typed </ColorSpan>
          <ErrorChangesColorSpan error={order.commandHasError}>❯ {order.instructionValues[0]} </ErrorChangesColorSpan>
          <ErrorChangesColorSpan error={order.spellEffectHasError}>{order.instructionValues[1]}</ErrorChangesColorSpan>
          <MessageSection>❯❯ {order.commandMessage}</MessageSection>
          <ErrorChangesColorSpan error={order.spellEffectHasError}>
            {order.spellEffectHasError ? '× failed' : '✓ success'}
          </ErrorChangesColorSpan>
          <MessageSection>{order.spellEffectMessage}</MessageSection>
          <ErrorChangesColorSpan error={order.spellEffectHasError}>
            {Array.isArray(order.spellEffectOutput) ? createChoices(order.spellEffectOutput) : order.spellEffectOutput}
          </ErrorChangesColorSpan>
        </SavedOrderListItem>
      ))}
    </SavedOrdersList>
  );
});
MagicList.displayName = 'MagicList';
export default MagicList;

const SavedOrdersList = styled.ul`
  height: 65vw;
  max-height: 400px;
  padding-bottom: 0;
  margin-bottom: 0;
  background-color: black;
  border: 1px solid black;
  list-style-type: '▹you ';
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
`;

const SavedOrderListItem = styled.li`
  word-wrap: break-word;
  padding-top: 1rem;
  margin-right: 1em;
  border-top: 2px solid #181818;
  &::marker {
    color: grey;
  }
`;

const MessageSection = styled.section`
  color: white;
`;

const ChoiceSpan = styled.span`
  //color: yellow;
  color: ${prop => (prop.isItem ? 'violet' : 'yellow')};
  padding: 5%;
`;
