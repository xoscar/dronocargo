import { createSelector } from 'reselect';
import { AppState } from '../configureStore';

const deliveriesReducerSelector = (state: AppState) => state.deliveries;

export const deliveriesListSelector = createSelector(deliveriesReducerSelector, ({ deliverMap, search }) => {
  const prefixRegex = new RegExp(`^${search}`, 'gmi');
  return Object.values(deliverMap).filter((delivery) => delivery.matchSearch(prefixRegex)).sort((a, b) => b.created - a.created);
});

export const deliverySelector = createSelector(deliveriesReducerSelector, ({ delivery }) => delivery);

export const deliverySearchSelector = createSelector(
  deliveriesReducerSelector,
  ({ search }) => search,
);

export const deliveryLoadingStateSelector = createSelector(
  deliveriesReducerSelector,
  ({ loadingState }) => loadingState,
);

export const deliveryCreateStateSelector = createSelector(
  deliveriesReducerSelector,
  ({ createState }) => createState,
);

export const deliveryErrorTextSelector = createSelector(
  deliveriesReducerSelector,
  ({ errorText }) => errorText,
);
