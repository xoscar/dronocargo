import { combineReducers } from 'redux';
import DeliveryReducer from './deliveryReducer';

const rootReducer = combineReducers({
  deliveries: DeliveryReducer
});

export default rootReducer;

