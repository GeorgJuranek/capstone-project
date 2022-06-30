import {nanoid} from 'nanoid';
//import {useState} from 'react';
import styled from 'styled-components';

import {AriaOnlySpan, ColorSpan, SwitchSpan} from '../Stylesheet/StyledSpans.js';

export default function MagicList({savedOrders}) {
  return (
    <>
      <SavedOrdersList role="list">
        {savedOrders.map(order => (
          <SavedOrderListitem key={nanoid()}>
            <AriaOnlySpan>you</AriaOnlySpan>
            <ColorSpan>typed </ColorSpan>
            <SwitchSpan error={order.error}>❯ {order.value}</SwitchSpan>
            <InfoP>❯❯ {order.info}</InfoP>
          </SavedOrderListitem>
        ))}
      </SavedOrdersList>
    </>
  );
}
// The AriaOnlySpan "you" reads the changed list-style-type in the ul for screenreader

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
  color: white;
  padding-top: 1rem;
  border-top: 2px solid #181818; //darkgrey
  color: #65ff00; //green
  &::marker {
    color: grey;
  }
`;

const InfoP = styled.p`
  color: white;
`;
