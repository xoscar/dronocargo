import type { NextPage } from 'next'
import Heading from '../components/heading';
import DeliveryTable from '../components/deliveryTable';
import { loadDeliveries } from '../reducers/deliveryReducer';
import { useEffect } from 'react';
import { useAppDispatch } from '../configureStore';
import { useSelector } from 'react-redux';
import { deliveriesListSelector } from '../selectors/deliverySelectors';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const deliveryList = useSelector(deliveriesListSelector);

  useEffect(()=> {
    dispatch(loadDeliveries());
  }, [dispatch]);

  return (
    <>
      <Heading />
      <DeliveryTable deliveryList={deliveryList} />
    </>
  );
}

export default Home;

