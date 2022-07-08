import {useEffect, useRef} from 'react';
import styled from 'styled-components';

import mazeEnd from '../../images/mazeRooms/mazeEnd.png';

export default function MagicCanvas() {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;

    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
  }, []);

  return (
    <div>
      <Canvas ref={canvasRef}></Canvas>
      <DataImg src={mazeEnd} ref={imgRef} alt="end" />
    </div>
  );
}

const Canvas = styled.canvas`
  width: 85vw;
  max-width: 800px;
  height: auto;
  max-height: 800px;
  margin: 3em auto 1em auto;
`;

const DataImg = styled.img`
  display: none;
`;
