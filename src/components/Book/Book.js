import styled from 'styled-components';

export default function MagicInfobox({toggleBook}) {
  return (
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
      <CloseBookButton onClick={() => toggleBook()}> {'->'} close book</CloseBookButton>
    </Box>
  );
}

const Box = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: space-around;
  min-width: 200px;
  width: 30%;
  max-width: 400px;
  height: auto;
  max-height: 50%;
  color: black;
  background-color: whitesmoke;
  opacity: 0.95;
  z-index: 5;
  padding: 5px;
  box-shadow: 2px 2px black;
  border-radius: 4px;
  border: 3px solid black;
  overflow: scroll;
`;

const StyledDl = styled.dl`
  margin: 20px;
`;

const StyledDt = styled.dt`
  background-color: yellow;
  margin-top: 10px;
  padding: 4px 8px;
  border: 2px solid black;
`;

const StyledDd = styled.dd`
  border: 2px solid black;
  padding: 15px;
`;

const CloseBookButton = styled.button`
  position: fixed;
  right: 9%;
  border: 3px solid black;
  background-color: skyblue;
`;
