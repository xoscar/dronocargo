import { InputBase } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background: ${({ theme }) => theme.whiteColor};
  margin: 0;
`;

export const InputText = styled(InputBase)`
  width: inherit;

  & .MuiInputBase-input {
    padding: 5px;
    padding-left: 35px;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  padding: 0px 5px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
