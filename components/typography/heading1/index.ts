import styled from 'styled-components';

export const template = {
  fontSize: '30px',
  fontWeight: 'normal',
  lineHeight: '24px',
};

const { fontSize, lineHeight, fontWeight } = template;

const Heading1 = styled.h1`
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  margin: 0px;
`;

export default Heading1;
