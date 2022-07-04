import {nanoid} from 'nanoid';
import {forwardRef} from 'react';
import styled from 'styled-components';

import {ScreenReaderOnlySpan, ColorSpan, SwitchSpan} from '../Stylesheet/StyledSpans.js';

const MagicList = forwardRef(({savedOrders}, ref) => {
  return (
    <SavedOrdersList ref={ref} role="list">
      {savedOrders.map(order => (
        <SavedOrderListitem key={nanoid()}>
          <ScreenReaderOnlySpan>you</ScreenReaderOnlySpan>
          <ColorSpan>typed </ColorSpan>
          <SwitchSpan error={order.error}>❯ {order.value}</SwitchSpan>
          <InfoP>❯❯ {order.info}</InfoP>
        </SavedOrderListitem>
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

const SavedOrderListitem = styled.li`
  word-wrap: break-word;
  line-break: anywhere;
  padding-top: 1rem;
  margin-right: 1em;
  border-top: 2px solid #181818;
  &::marker {
    color: grey;
  }
`;

const InfoP = styled.p`
  color: white;
`;
