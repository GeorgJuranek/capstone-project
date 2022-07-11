import {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import {keyframes, css} from 'styled-components';

import mazeEnd from '../../images/mazeRooms/mazeEnd.png';
import mazeWay from '../../images/mazeRooms/mazeWay.png';
import foobar from '../../images/sprites/foobarSprite1.png';

export default function MagicImage({currentArrayPosition, isEnlighten, changeEnlighten}) {
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState();
  const fader = useRef();

  //
  useEffect(() => {
    if (currentArrayPosition.type === 'start' || currentArrayPosition.type === 'end') {
      setCurrentBackgroundImage(<BackgroundImg src={mazeEnd} alt="the end of the way" />);
    } else {
      setCurrentBackgroundImage(<BackgroundImg src={mazeWay} alt="a lonely and spooky corridor" />);
    }
  }, [currentArrayPosition]);
  // Following only used to rerender idependly from first useEffect
  useEffect(() => {}, [isEnlighten]);

  return (
    <>
      <FramingDiv>
        <FaderDiv ref={fader} fadeSelect={isEnlighten ? fadeOutSelect : noFade}></FaderDiv>
        {currentBackgroundImage}
        <FrontImage src={foobar} alt="" width="172" height="438" />
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

const BackgroundImg = styled.img`
  border-width: 2px 6px;
  border-color: black;
  border-style: solid;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const FrontImage = styled.img`
  width: 20%;
  height: 70%;
  position: absolute;
  z-index: 1;
  left: 20%;
  bottom: 0;
`;

const FaderDiv = styled.div`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  // for animation
  ${props => props.fadeSelect}
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
