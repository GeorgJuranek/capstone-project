import styled from 'styled-components';
import {css} from 'styled-components';

export const BackgroundImg = styled.img`
  border-width: 2px 6px;
  border-color: black;
  border-style: solid;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const FrontWizard1Img = styled.img`
  width: 20%;
  height: 60%;
  position: absolute;
  z-index: 3;
  left: 18%;
  bottom: 0;
`;

// Specific css for items
export const ItemImg = styled.img`
  position: absolute;
  ${props => props.itemCss};
`;

export const officePositionCss = css`
  width: 40%;
  height: 40%;
  z-index: 1;
  right: 14%;
  bottom: 8%;
`;

export const binPositionCss = css`
  width: 28%;
  height: 28%;
  z-index: 1;
  right: 6%;
  bottom: 5%;
`;

export const coffeePositionCss = css`
  width: 35%;
  height: 35%;
  z-index: 1;
  right: 13%;
  bottom: 8%;
`;

export const flowerPositionCss = css`
  width: auto;
  height: 20%;
  z-index: 1;
  right: 11%;
  bottom: 29%;
`;
