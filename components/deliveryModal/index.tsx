import { FunctionComponent, useMemo } from 'react';
import {
  TopSection,
  Wrapper,
  SubHeaderText,
  Close,
  ErrorText,
} from '../deliveryForm/deliveryFormStyled';
import Delivery from '../../models/Delivery';
import Heading2 from '../typography/heading2';
import { DeliveryFields } from '../deliveryForm/deliveryFormFormikProps';
import { Modal } from '@mui/material';
import DeliveryForm from '../deliveryForm';
import { useSelector } from 'react-redux';
import { deliveryCreateStateSelector, deliveryErrorTextSelector } from '../../selectors/deliverySelectors';
import { LoadingState } from '../../reducers/deliveryReducer';

export type DeliveryFormProps = {
  onSubmit(values: DeliveryFields): void;
  onClose(): void;
  delivery?: Delivery;
  isOpen: boolean;
};

const DeliveryModal: FunctionComponent<DeliveryFormProps> = ({ onSubmit, onClose, delivery, isOpen }) => {
  const isError = useSelector(deliveryCreateStateSelector) === LoadingState.error;
  const errorText = useSelector(deliveryErrorTextSelector);
  const isEditing = !!delivery?.orderId;

  return (
    <Modal open={isOpen}>
      <Wrapper>
        <TopSection>
          <Heading2>{isEditing ? 'Edit delivery' : 'New delivery'}</Heading2>
          <Close onClick={() => onClose()} />
          <SubHeaderText>Please select the order ID and a technician to deploy the cargo. All elements are mandatory.</SubHeaderText>
          {isError && <ErrorText>{errorText}</ErrorText>}
        </TopSection>
        <DeliveryForm delivery={delivery}  onSubmit={onSubmit} onClose={onClose} />
      </Wrapper>
    </Modal>
  );
};

export default DeliveryModal;
