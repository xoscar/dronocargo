import styled from 'styled-components';
import Body1 from '../typography/body1';

export const Wrapper = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled(Body1)`
  font-weight: 600;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainContainer = styled.div`
  margin: 50px 0;
`;
