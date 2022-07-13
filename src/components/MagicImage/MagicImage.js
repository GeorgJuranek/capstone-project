import {useRef} from 'react';
import styled from 'styled-components';
import {keyframes, css} from 'styled-components';

import wizard1 from '../../images/sprites/wizard1Sprite1.png';
import {FrontWizard1Img} from '../../stylesheet/StyledImages.js';
import {BackgroundImg} from '../../stylesheet/StyledImages.js';

export default function MagicImage({currentBackgroundImage, isRoomEnlighten}) {
  const fader = useRef();

  return (
    <FramingDiv>
      <FaderDiv ref={fader} fadeSelect={isRoomEnlighten ? fadeOutSelect : noFade}></FaderDiv>
      <BackgroundImg src={currentBackgroundImage.image} alt={currentBackgroundImage.altText} />
      <FrontWizard1Img src={wizard1} alt="" width="172" height="438" />
    </FramingDiv>
  );
}

const FramingDiv = styled.div`
  position: relative;
  width: 80vw;
  max-width: 700px;
  height: auto;
  margin: 3em 0 1em 0;
  background-color: black;
  border-width: 10px 5px 16px 5px;
  border-style: ridge groove;
  border-radius: 2%;
  box-shadow: 0 2px 100px #888;
`;

const FaderDiv = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: 2;
  ${props => props.fadeSelect}; //for animation
`;

//ANIMATION for FaderDiv//

const fadeOutAnimation = keyframes`
      0%{opacity:0.8;}
      10%{opacity:0.95;}
      100%{opacity:0;}
  `;

const fadeOutSelect = css`
  opacity: 0;
  animation-name: ${fadeOutAnimation};
  animation-duration: 6s;
  animation-iteration-count: 1;
`;

const fadingNoiseAnimation = keyframes`
      0%{opacity:0.85;}
      30%{opacity:0.83;}
      44%{opacity:0.81;}
      68%{opacity:0.82;}
      100%{opacity:0.84;}
  `;

const noFade = css`
  animation-name: ${fadingNoiseAnimation};
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
`;
