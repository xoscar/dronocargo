import { Button } from '@mui/material';
import styled from 'styled-components';
import Heading1 from '../typography/heading1';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  gap: 16px;
`

export const HistoryText = styled(Heading1)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;

export const DeliveryButton = styled(Button).attrs({
  variant: 'contained',
})`
  background: #307460;
  text-transform: none;
`;