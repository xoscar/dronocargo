import styled from 'styled-components';
import { Button } from '@mui/material';
import Body1 from '../typography/body1';
import Body2 from '../typography/body2';

export const CellTitle = styled(Body2)`
  color: rgba(0, 0, 0, 0.5);
  line-height: 16px;
`;

export const CellValue = styled(Body1)``;

export const DetailsButton = styled(Button).attrs({
  variant: 'outlined',
})`
  border-color: rgba(0, 0, 0, 0.15);
  color: #000000;
  text-transform: none;
`;
