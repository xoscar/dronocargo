import { TableCell, TableRow } from '@mui/material';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { CellTitle, CellValue, DetailsButton } from './deliveryRowStyled';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import ActionsDropdown from '../actionsDropdown';
import Delivery from '../../models/Delivery';

type DeliveryRowProps = {
  delivery: Delivery;
  onEdit(delivery: Delivery): void;
  onDelete(delivery: Delivery): void;
}

const DeliveryRow: FunctionComponent<DeliveryRowProps> = ({ delivery, onDelete, onEdit }) => {
  const { status, technician, orderId, platform, droneId, technicalStatus } = delivery;

  return (
    <TableRow>
      <TableCell>
        <CellTitle>Status</CellTitle>
        <CellValue>{status}</CellValue>
      </TableCell>
      <TableCell>
        <CellTitle>Order ID</CellTitle>
        <CellValue>{orderId}</CellValue>
      </TableCell>
      <TableCell>
        <CellTitle>Technician</CellTitle>
        <CellValue>{technician}</CellValue>
      </TableCell>
      <TableCell>
        <CellTitle>Platform</CellTitle>
        <CellValue>{platform}</CellValue>
      </TableCell>
      <TableCell>
        <CellTitle>Drone</CellTitle>
        <CellValue>{droneId}</CellValue>
      </TableCell>
      <TableCell>
        <CellTitle>Technical check</CellTitle>
        <CellValue>{technicalStatus}</CellValue>
      </TableCell>
      <TableCell>
        <Link href={`/deliveries/${orderId}`} passHref>
          <DetailsButton endIcon={<ViewSidebarIcon htmlColor=" rgba(0, 0, 0, 0.25);" />}>Details</DetailsButton>
        </Link>
      </TableCell>
      <TableCell>
        <ActionsDropdown onEdit={() => onEdit(delivery)} onDelete={() => onDelete(delivery)} />
      </TableCell>
    </TableRow>
  );
};

export default DeliveryRow;
