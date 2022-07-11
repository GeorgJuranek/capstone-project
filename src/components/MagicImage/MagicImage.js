import {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import {keyframes, css} from 'styled-components';

import mazeEnd from '../../images/mazeRooms/mazeEnd.png';
import mazeWay from '../../images/mazeRooms/mazeWay.png';

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
      <h2>Image: </h2>
      <FramingDiv>
        <FaderDiv ref={fader} fadeSelect={isEnlighten ? fadeOutSelect : noFade}></FaderDiv>
        {currentBackgroundImage}
        <FrontImage src={require('../../images/logo1.png')} alt="" width="125" height="125" />
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
  margin: 1em 0;
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
  width: 25%;
  height: 25%;
  position: absolute;
  z-index: 1;
  right: 20%;
  bottom: 55%;
`;

const FaderDiv = styled.div`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  //
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
