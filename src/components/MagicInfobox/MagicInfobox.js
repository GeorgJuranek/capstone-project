import styled from 'styled-components';

export default function MagicInfobox({toggleBookActive}) {
  return (
    <>
      <Box>
        <h2>notes:</h2>
        <StyledDl>
          <StyledDt>pwd</StyledDt>
          <StyledDd> to check on your current position.</StyledDd>
          <StyledDt>ls</StyledDt>
          <StyledDd> to find new rooms.</StyledDd>
          <StyledDt>cd</StyledDt>
          <StyledDd> to move from one room to another.</StyledDd>
          <StyledDt>cat</StyledDt>
          <StyledDd> to check on items in the rooms.</StyledDd>
        </StyledDl>
        <StyledButton onClick={() => toggleBookActive()}> {'->'} close book</StyledButton>
      </Box>
    </>
  );
}

const StyledButton = styled.button`
  position: absolute;
  right: 1px;
  top: 1px;
  border: 3px solid black;
  padding: 0;
  margin: auto;
  background-color: skyblue;
  opacity: 1;
`;

const StyledDl = styled.dl`
  overflow: scroll;
  margin: 20px;
  //word-break: smooth;
`;
const StyledDt = styled.dt`
  border: 2px solid black;
  background-color: yellow;
  margin-top: 3px;
`;
const StyledDd = styled.dd`
  //width: 50%;
  border: 2px solid black;
`;

const Box = styled.div`
  overflow: scroll;
  min-width: 200px;
  width: 30%;
  max-width: 400px;
  height: auto;
  max-height: 50%;
  background-color: whitesmoke;
  opacity: 0.95;
  border: 3px solid black;
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 5;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: space-around;
  color: black;
  box-shadow: 2px 2px black;
  border-radius: 4px;
`;
