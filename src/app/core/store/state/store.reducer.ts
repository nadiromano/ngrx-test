import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { StoreModel } from '../store.model';
import * as StoreActions from '../state/store.actions';

export interface StoreState {
  store: StoreModel;
  error: string;
}

const initialState: StoreState = {
  store: { name: '', category: '', employee: [] },
  error: '',
};

const getStoreFeatureState = createFeatureSelector<StoreState>('store');

export const getStore = createSelector(getStoreFeatureState, (store) => store.store);

export const StoreReducer = createReducer<StoreState>(
  initialState,
  on(StoreActions.loadStoreSuccess, (state, action): StoreState => {
    return {
      ...state,
      store: action.store,
      error: '',
    };
  }),
  on(StoreActions.loadStoreFailure, (state, action): StoreState => {
    return {
      ...state,
      error: action.error,
    };
  })
);
