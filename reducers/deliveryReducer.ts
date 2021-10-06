import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { keyBy } from 'lodash';
import { DeliveryValues } from '../components/deliveryForm/deliveryFormFormikProps';
import DeliveryClient from '../gateways/DeliveryAPI/DeliveryClient';
import Delivery from '../models/Delivery';

export enum LoadingState {
  idle ='idle',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

type DeliveryReducerInitialState = {
  deliverMap: { [key: string]: Delivery };
  delivery?: Delivery;
  loadingState: LoadingState;
  createState: LoadingState;
  search: string;
  errorText?: string;
};

const initialState: DeliveryReducerInitialState = {
  deliverMap: {},
  delivery: undefined,
  loadingState: LoadingState.idle,
  createState: LoadingState.idle, 
  search: '',
  errorText: '',
};

export const loadDeliveries = createAsyncThunk<Array<Delivery>>(
  'deliveries/load', () => {
    const deliveryList = DeliveryClient.getAll();

    return deliveryList;
  },
);

export const createDelivery = createAsyncThunk<Delivery, DeliveryValues>(
  'deliveries/crete', async (rawDelivery, { rejectWithValue }) => {
    try {
      const newDelivery = await DeliveryClient.create(rawDelivery);

      return newDelivery;
    } catch(error) {
      return rejectWithValue(error);
    }
  },
);

export const editDelivery = createAsyncThunk<Delivery, DeliveryValues>(
  'deliveries/edit', async (rawDelivery, { rejectWithValue }) => {
    try {
      const updatedDelivery = await DeliveryClient.update(rawDelivery.orderId, rawDelivery);

      return updatedDelivery;
    } catch(error) {
      return rejectWithValue(error);
    }
  },
);

export const removeDelivery = createAsyncThunk<string, string>(
  'deliveries/remove', async (orderId, { rejectWithValue }) => {
    try {
      await DeliveryClient.remove(orderId);

      return orderId;
    } catch(error) {
      return rejectWithValue(error);
    }
  },
);

const { actions, reducer } = createSlice({
  name: 'deliveries',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(loadDeliveries.fulfilled, (state, action) => {
      const { payload: deliveryList } = action;

      state.deliverMap = {
        ...state.deliverMap,
        ...keyBy(deliveryList, 'orderId'),
      };

      state.loadingState = LoadingState.success;
    })
    .addCase(createDelivery.fulfilled, (state, action) => {
      const { payload: delivery } = action;

      state.deliverMap = {
        [delivery.orderId]: delivery,
        ...state.deliverMap,
      };

      state.createState = LoadingState.success;
    })
    .addCase(editDelivery.fulfilled, (state, action) => {
      const { payload: delivery } = action;

      state.deliverMap[delivery.orderId] = delivery;

      state.createState = LoadingState.success;
    })
    .addCase(removeDelivery.fulfilled, (state, action) => {
      const { payload: orderId } = action;

      delete state.deliverMap[orderId];

      state.createState = LoadingState.success;
    })
    .addCase(createDelivery.rejected, (state, action) => {
      const error = action.payload as string;
      
      state.errorText = error;
      state.createState = LoadingState.error;
    })
    .addCase(editDelivery.rejected, (state, action) => {
      const error = action.payload as string;
      
      state.errorText = error;
      state.createState = LoadingState.error;
    })
    .addCase(createDelivery.pending, (state) => {
      state.errorText = '';
      state.createState = LoadingState.loading;
    })
    .addCase(editDelivery.pending, (state) => {
      state.errorText = '';
      state.createState = LoadingState.loading;
    });
  },
});

export const { setSearch } = actions;
export default reducer;
