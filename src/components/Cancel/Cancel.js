import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function MagicTextbox({toggleCancel}) {
  const navigate = useNavigate();

  return (
    <Box>
      <h2>You wanna cancel the exam?</h2>
      <ButtonsFlex>
        <StyledButton isYes={true} onClick={() => navigate('/')}>
          y
        </StyledButton>
        <StyledButton isYes={false} onClick={() => toggleCancel()}>
          n
        </StyledButton>
      </ButtonsFlex>
    </Box>
  );
}

const Box = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 400px;
  padding: 30px;
  opacity: 0.95;
  z-index: 5;
  border: 3px solid red;
  color: red;
  background-color: hotpink;
`;

const ButtonsFlex = styled.div`
  display: flex;
  justify-items: space-between;
  flex-wrap: wrap;
  gap: 25%;
`;

const StyledButton = styled.button`
  width: 55px;
  height: 55px;
  margin: 15px;
  font-size: 30px;
  border-radius: 5px;
  border-color: 'grey';
  color: ${prop => (prop.isYes ? 'white' : 'black')};
  background-color: ${prop => (prop.isYes ? 'green' : 'red')};
`;
