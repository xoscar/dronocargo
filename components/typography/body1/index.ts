import styled from 'styled-components';

export const template = {
  fontSize: '16px',
  fontWeight: 'normal',
  lineHeight: '24px',
};

const { fontSize, lineHeight } = template;

type Body1Props = {
  fontWeight?: string;
};

const Body1 = styled.p<Body1Props>`
  font-size: ${fontSize};
  font-weight: ${({ fontWeight }) => fontWeight || template.fontWeight};
  line-height: ${lineHeight};
  margin: 0px;
`;

export default Body1;
