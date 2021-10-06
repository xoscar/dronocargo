import styled from 'styled-components';

export const template = {
  fontSize: '24px',
  fontWeight: 'normal',
  lineHeight: '24px',
};

const { fontSize, lineHeight, fontWeight } = template;

const Heading2 = styled.h2`
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  margin: 0px;
`;

export default Heading2;
