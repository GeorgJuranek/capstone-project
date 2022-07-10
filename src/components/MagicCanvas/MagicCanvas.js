import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

import mazeEnd from '../../images/mazeRooms/mazeEnd.png';
//import mazeWay from '../../images/mazeRooms/mazeWay.png';

export default function MagicCanvas() {
  const canvasRef = useRef();
  const imgRef = useRef();
  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  useEffect(() => {
    if (hasImageLoaded) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = imgRef.current;
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  }, [hasImageLoaded]);

  return (
    <>
      <h2>Canvas: </h2>
      <CanvasWrapper>
        <Canvas ref={canvasRef}></Canvas>
      </CanvasWrapper>

      <DataImg
        ref={imgRef}
        src={mazeEnd}
        alt=""
        onLoad={() => {
          setHasImageLoaded(true);
        }}
      />
    </>
  );
}

const CanvasWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: red;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  width: 300%;
  height: 300%;
  top: 0;
  left: 0;
  transform: scale(0.335);
  transform-origin: 0 0;
`;

const DataImg = styled.img`
  display: none;
`;
