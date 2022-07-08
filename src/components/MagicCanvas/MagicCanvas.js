import {useEffect, useRef} from 'react';
import styled from 'styled-components';

import mazeEnd from '../../images/mazeRooms/mazeEnd.png';

export default function MagicCanvas() {
  const canvasRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
  }, []);

  return (
    <>
      <Canvas ref={canvasRef}></Canvas>
      <DataImg ref={imgRef} src={mazeEnd} alt="" />
    </>
  );
}

const Canvas = styled.canvas`
  width: 500px;
  height: auto;
  margin: 2em auto 1em auto;
  border: 8px solid black;
  border-radius: 2%;
`;

const DataImg = styled.img`
  display: none;
`;
