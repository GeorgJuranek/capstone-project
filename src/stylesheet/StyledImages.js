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

export const ProtagonistImg = styled.img`
  width: 20%;
  height: 60%;
  position: absolute;
  z-index: 3;
  left: 15%;
  bottom: 0;
`;

export const ItemImg = styled.img`
  position: absolute;
  ${props => props.itemCss};
`;

export const officePosition = css`
  width: 40%;
  height: 40%;
  z-index: 1;
  right: 14%;
  bottom: 8%;
`;

export const binPosition = css`
  width: 28%;
  height: 28%;
  z-index: 1;
  right: 6%;
  bottom: 5%;
`;

export const coffeePosition = css`
  width: 35%;
  height: 35%;
  z-index: 1;
  right: 13%;
  bottom: 8%;
`;

export const flowerPosition = css`
  width: auto;
  height: 20%;
  z-index: 1;
  right: 11%;
  bottom: 29%;
`;

export const studentslistPosition = css`
  width: auto;
  height: 27%;
  position: absolute;
  z-index: 1;
  right: 34%;
  top: 30%;
`;

export const urinalsPosition = css`
  width: auto;
  height: 22%;
  z-index: 1;
  right: 21%;
  bottom: 20%;
`;

export const toiletPosition = css`
  width: auto;
  height: 60%;
  z-index: 1;
  right: 10%;
  bottom: 8%;
`;

export const archivePosition = css`
  width: auto;
  height: 45%;
  z-index: 1;
  right: 18%;
  bottom: 12%;
`;

export const wizardXyzzyPosition = css`
  width: auto;
  height: 45%;
  position: absolute;
  z-index: 3;
  right: 15%;
  bottom: 3%;
`;

export const windowPosition = css`
  width: auto;
  height: 35%;
  position: absolute;
  z-index: 3;
  right: 22%;
  top: 20%;
`;
