import { Table, TableBody } from '@mui/material';
import { FunctionComponent, useCallback, useState } from 'react';
import { useAppDispatch } from '../../configureStore';
import Delivery from '../../models/Delivery';
import { editDelivery, removeDelivery } from '../../reducers/deliveryReducer';
import DeliveryModal from '../deliveryModal';
import DeliveryRow from '../deliveryRow';
import { TableWrapper } from './deliveryTableStyled';

type DeliveryTableProps = {
  deliveryList: Array<Delivery>
}

const DeliveryTable: FunctionComponent<DeliveryTableProps> = ({ deliveryList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [delivery, setDelivery] = useState<Delivery | undefined>();
  const dispatch = useAppDispatch();

  const onEditClick = useCallback((delivery: Delivery) => {
    setIsOpen(true);
    setDelivery(delivery);
  }, []);

  const onDeleteClick = useCallback((delivery: Delivery) => {
    dispatch(removeDelivery(delivery.orderId));
  }, [dispatch]);

  const onSubmitEdit = useCallback((values) => {
    dispatch(editDelivery(values));
    setIsOpen(false);
  }, [dispatch]);

  return (
    <>
      <TableWrapper>
        <Table>
          <TableBody>
            {deliveryList.map((delivery) => <DeliveryRow key={delivery.orderId} delivery={delivery} onEdit={onEditClick} onDelete={onDeleteClick} />)}
          </TableBody>
        </Table>
      </TableWrapper>
      <DeliveryModal delivery={delivery} isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={onSubmitEdit} />
    </>
  );
};

export default DeliveryTable;