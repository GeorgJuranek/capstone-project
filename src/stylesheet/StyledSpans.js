import styled from 'styled-components';

export const ScreenReaderOnlySpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const CodeSpan = styled.span`
  color: white;
  background-color: grey;
  padding: 3px;
  border-radius: 25%;
  border: 2px solid lightgrey;
`;

export const ColorSpan = styled.span`
  color: dodgerblue;
`;

export const ErrorChangesColorSpan = styled.span`
  color: ${prop => (prop.error ? 'red' : '#65ff00')};
`;
// You give ErrorChangesColorSpan a property like "error={true/false}"
// if what you give it returns "true" the things thats nested will be red

export const FrameSpan = styled.span`
  border: thin solid #65ff00;
  margin: 1px;
  padding: 3px 3px 0 3px;
`;
