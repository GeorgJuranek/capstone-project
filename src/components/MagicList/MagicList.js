import {nanoid} from 'nanoid';
import {forwardRef} from 'react';
import styled from 'styled-components';

import {ScreenReaderOnlySpan, ColorSpan, ErrorChangesColorSpan} from '../../stylesheet/StyledSpans.js';

const MagicList = forwardRef(({savedOrders}, ref) => {
  //
  function createChoices(orderOutputs) {
    return orderOutputs.map(spellEffectEntry => (
      <ChoiceDiv key={nanoid()} isItem={spellEffectEntry.includes('.itm')}>
        {spellEffectEntry}
      </ChoiceDiv>
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
  list-style-position: inside;
  padding-left: 1%;
  height: 100%;
  padding-bottom: 0;
  margin-bottom: 0;
  background-color: black;
  border: 1px solid black;
  list-style-type: '▹you ';
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
  //
  min-height: 300px;
`;

const SavedOrderListItem = styled.li`
  word-wrap: break-word;
  padding-top: 1em;
  margin-right: 1em;
  border-top: 2px solid #181818;

  &::marker {
    color: grey;
  }
`;

const MessageSection = styled.section`
  color: white;
`;

const ChoiceDiv = styled.div`
  color: ${prop => (prop.isItem ? 'violet' : 'yellow')};
  padding: 0 5%;
`;
