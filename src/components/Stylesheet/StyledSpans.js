import styled from 'styled-components';

export const AriaOnlySpan = styled.span`
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
  border-radius: 20%;
`;

export const ColorSpan = styled.span`
  color: DodgerBlue;
`;

export const SwitchSpan = styled.span`
  color: ${prop => (prop.error ? 'red' : '#65ff00')};
`;
// You give SwitchSpan a property called "error={true/false}"
// if what you give it returns "true" the things thats nested will be red
