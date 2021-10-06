import { FunctionComponent, ReactElement } from 'react';
import Body1 from '../typography/body1';
import { Row, TitleText, Wrapper, MainContainer } from './navigationStyled';

type NavigationProps = {
  children: ReactElement;
}

const Navigation: FunctionComponent<NavigationProps> = ({ children }) => {
  return (
    <Wrapper>
      <Row>
       <TitleText>Dronocargo</TitleText>
       <Body1>Regina Zepeda</Body1>
      </Row>
      <MainContainer>
        {children}
      </MainContainer>
      <Row>
        <Body1>Powered by Nuvo Cargo</Body1>
        <Body1>Help</Body1>
      </Row>
    </Wrapper>
  );
};

export default Navigation;