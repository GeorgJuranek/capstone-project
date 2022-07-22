import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function MagicTextbox({changeCancel}) {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <h2>You wanna cancel the exam?</h2>
        <StyledButton isYes={true} onClick={() => navigate('/')}>
          y
        </StyledButton>

        <StyledButton isYes={false} onClick={() => changeCancel(true)}>
          n
        </StyledButton>
      </Box>
    </>
  );
}

const StyledButton = styled.button`
  color: ${prop => (prop.isYes ? 'white' : 'black')};
  background-color: ${prop => (prop.isYes ? 'green' : 'red')};
  width: 55px;
  height: 55px;
  font-size: 30px;
  border-color: 'grey';
  border-radius: 5px;
  margin: 0 0 40px auto;
`;

const Box = styled.div`
  width: 75%;
  max-width: 400px;
  height: auto;
  background-color: hotpink;
  opacity: 0.85;
  border: 3px solid red;
  position: absolute;
  top: 10%;
  left: auto;
  z-index: 5;
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: space-around;
  color: red;
`;
