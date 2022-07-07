import {forwardRef} from 'react';
import styled from 'styled-components';

import {ScreenReaderOnlySpan, ColorSpan, ErrorChangesColorSpan} from '../Stylesheet/StyledSpans.js';

const MagicList = forwardRef(({savedOrders}, ref) => {
  return (
    <SavedOrdersList ref={ref} role="list">
      {savedOrders.map(order => (
        <SavedOrderListItem key={order.id}>
          <ScreenReaderOnlySpan>you</ScreenReaderOnlySpan>
          <ColorSpan>typed </ColorSpan>
          <ErrorChangesColorSpan error={order.commandHasError}>❯ {order.inputValues[0]} </ErrorChangesColorSpan>
          <ErrorChangesColorSpan error={order.spellEffectHasError}>{order.inputValues[1]}</ErrorChangesColorSpan>
          <MessageSection>❯❯ {order.commandMessage}</MessageSection>

          <ErrorChangesColorSpan error={order.spellEffectHasError}>
            {order.spellEffectHasError ? '× failed' : '✓ success'}
          </ErrorChangesColorSpan>
          <MessageSection>{order.spellEffectMessage}</MessageSection>
          <ErrorChangesColorSpan error={order.spellEffectHasError}>{order.spellEffectOutput}</ErrorChangesColorSpan>
        </SavedOrderListItem>
      ))}
    </SavedOrdersList>
  );
});
MagicList.displayName = 'MagicList';
export default MagicList;

const SavedOrdersList = styled.ul`
  background-color: black;
  border: 1px solid black;
  list-style-type: '▹you ';
  height: 50vw;
  max-height: 400px;
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const SavedOrderListItem = styled.li`
  word-wrap: break-word;
  line-break: anywhere;
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
