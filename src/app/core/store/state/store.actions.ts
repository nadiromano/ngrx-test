import { createAction, props } from '@ngrx/store';
import { StoreModel } from '../store.model';

export const loadStore = createAction('[STORE] Load Store');
export const loadStoreSuccess = createAction(
  '[STORE] Load Store Success',
  props<{ store: StoreModel }>()
);
export const loadStoreFailure = createAction(
  '[STORE] Load Store Failure',
  props<{ error: string }>()
);
