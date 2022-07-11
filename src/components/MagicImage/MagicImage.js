import {useRef} from 'react';
import styled from 'styled-components';
import {keyframes, css} from 'styled-components';

import foobar from '../../images/sprites/foobarSprite1.png';
import {FrontFoobarImg} from '../../stylesheet/StyledImages.js';

export default function MagicImage({currentBackgroundImage, isRoomEnlighten}) {
  const fader = useRef();

  return (
    <>
      <FramingDiv>
        <FaderDiv ref={fader} fadeSelect={isRoomEnlighten ? fadeOutSelect : noFade}></FaderDiv>
        {currentBackgroundImage}
        <FrontFoobarImg src={foobar} alt="" width="172" height="438" />
      </FramingDiv>
    </>
  );
}

const FramingDiv = styled.div`
  position: relative;
  width: 80vw;
  max-width: 700px;
  height: auto;
  max-height: 500px;
  border-width: 6px 5px 16px 5px;
  border-style: ridge groove;
  border-radius: 2%;
  margin: 3em 0 1em 0;
  box-shadow: 0 2px 100px #888;
`;

const FaderDiv = styled.div`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  ${props => props.fadeSelect}; //for animation
`;

//ANIMATION for FaderDiv//

const fadeOutAnimation = keyframes`
      0%{opacity:0.96;}
      5%{opacity:0.9;}
      100%{opacity:0;}
  `;

const fadeOutSelect = css`
  opacity: 0;
  animation-name: ${fadeOutAnimation};
  animation-duration: 5s;
  animation-iteration-count: 1;
`;

const noFade = css`
  opacity: 0.96;
`;
