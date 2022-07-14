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
  height: 70%;
  position: absolute;
  z-index: 3;
  left: 16%;
  bottom: 0;
`;

// Specific css for items
export const ItemImg = styled.img`
  position: absolute;
  ${props => props.itemCss};
`;

export const officePositionCss = css`
  width: 50%;
  height: 50%;
  z-index: 1;
  right: 8%;
  bottom: 8%;
`;

export const binPositionCss = css`
  width: 30%;
  height: 30%;
  z-index: 1;
  right: 5%;
  bottom: 5%;
`;
