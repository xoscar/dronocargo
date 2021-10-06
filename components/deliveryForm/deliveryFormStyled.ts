import { Button, FormControl } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import Body1 from '../typography/body1';
import Body2 from '../typography/body2';
import CloseIcon from '@mui/icons-material/Close';

export const Wrapper = styled.div`
  background: white;
  position: absolute;
  width: 560px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

export const SubHeaderText = styled(Body1)`
  margin-top: 16px;
`;

export const ErrorText = styled(Body2)`
  color: red;
`;

export const ContentSection = styled(Box)`
  width: 100%;
  display: flex;
  padding: 32px;
  padding-top: 0px;
  flex-wrap: wrap;
  gap: 23px;
`;

export const FormSection = styled(FormControl).attrs({
  variant: 'standard',
})`
  && {
    margin-bottom: 25px;
    width: 45%;
  }
`;

export const AcceptButton = styled(Button).attrs({
  variant: 'contained',
})`
  && {
    align-self: flex-end;
    background: #307460;
    text-transform: none;

    &:hover {
      background: #307460;
    }
  }
`;

export const CancelButton = styled(Button).attrs({
  variant: 'outlined',
})`
  && {
    text-transform: none;
    color: #000000;
  }
`;

export const Close = styled(CloseIcon).attrs({
  htmlColor: 'rgba(0, 0, 0, 0.5)',
})`
  cursor: pointer;
`;

export const TopSection = styled.div`
  display: flex;
  padding: 32px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterSection = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 32px;
  gap: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const FieldLabel = styled(Body2)`
  color: rgba(0, 0, 0, 0.5);
`;
