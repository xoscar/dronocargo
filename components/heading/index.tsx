import { FunctionComponent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Search from '../search';
import Heading1 from '../typography/heading1';
import { Wrapper, Section, HistoryText, DeliveryButton } from './headingStyled';
import DeliveryModal from '../deliveryModal';
import { useAppDispatch } from '../../configureStore';
import { createDelivery, setSearch } from '../../reducers/deliveryReducer';
import { deliverySearchSelector } from '../../selectors/deliverySelectors';

const Heading: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const search = useSelector(deliverySearchSelector);
  
  const onChange = useCallback((value) => {
    dispatch(setSearch(value));
  }, [dispatch]);

  const onSubmit = useCallback(async (values) => {
    await dispatch(createDelivery(values)).unwrap();

    setIsOpen(false);
  }, [dispatch]);

  return (
    <Wrapper>
      <Section>
        <Heading1>Delivery</Heading1>
        <HistoryText>History</HistoryText>
      </Section>
      <Section>
        <Search onChange={onChange} value={search} />
        <DeliveryButton onClick={() => setIsOpen(true)}>New Delivery</DeliveryButton>
      </Section>
      <DeliveryModal isOpen={isOpen} onSubmit={onSubmit} onClose={() => setIsOpen(false)} />
    </Wrapper>
  );
};

export default Heading;

