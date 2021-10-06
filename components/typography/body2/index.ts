import styled from 'styled-components';
import Body1 from '../body1';

export const template = {
  fontSize: '14px',
  fontWeight: 'normal',
};

const { fontSize } = template;

type Body2Props = {
  fontWeight?: string;
};

const Body2 = styled(Body1)<Body2Props>`
  font-size: ${fontSize};
  font-weight: ${({ fontWeight }) => fontWeight || template.fontWeight};
  margin: 0px;
`;

export default Body2;
