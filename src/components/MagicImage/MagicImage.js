import {useRef} from 'react';
import styled from 'styled-components';
import {keyframes, css} from 'styled-components';

import wizardFoobar from '../../images/charSprites/wizardFoobar.png';
import {ProtagonistImg, BackgroundImg, ItemImg} from '../../stylesheet/StyledImages.js';

export default function MagicImage({
  currentPosition,
  currentBackgroundImage,
  isRoomEnlighten,
  triggerCurtain,
  changeTriggerCurtain,
  inputInFocus,
}) {
  const fader = useRef();
  const curtain = useRef();

  if (triggerCurtain === true) {
    setTimeout(changeTriggerCurtain, 2550); //sets bool back to false when animation has finished
  }

  return (
    <FramingDiv inputInFocus={inputInFocus}>
      <FaderDiv ref={curtain} fadeSelect={triggerCurtain ? curtainFade : noCurtain}></FaderDiv>
      <FaderDiv ref={fader} fadeSelect={isRoomEnlighten ? fadeOutSelect : noFade}></FaderDiv>
      <BackgroundImg src={currentBackgroundImage.image} alt={currentBackgroundImage.altText} />
      {currentPosition.items.map(item => (
        <ItemImg itemCss={item.css} key={item.id} src={item.image} alt={item.altText} />
      ))}
      <ProtagonistImg src={wizardFoobar} alt="" width="172" height="438" />
    </FramingDiv>
  );
}

const FramingDiv = styled.div`
  position: relative;
  width: ${prop => (prop.inputInFocus ? '50%' : '100%')}; //auto;
  height: ${prop => (prop.inputInFocus ? '50%' : '100%')}; //auto;
  max-width: 600px;
  background-color: black;
  border-width: 10px 8px 16px 8px;
  border-style: ridge;
  border-radius: 2%;
  box-shadow: 0 2px 50px #888;
`;

//ANIMATION-ELEMENTS
//vessel
const FaderDiv = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: 2;
  ${props => props.fadeSelect}; //for animation
`;

//fader
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

//curtain

const curtainAnimation = keyframes`
      0%{opacity:1;}
      100%{opacity:0;}
`;

const curtainFade = css`
  opacity: 0;
  animation-name: ${curtainAnimation};
  animation-duration: 2.5s;
  animation-iteration-count: 1;
`;

const noCurtain = css`
  opacity: 0;
`;
