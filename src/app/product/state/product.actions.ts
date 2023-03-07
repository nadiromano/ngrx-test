import { createAction, props } from '@ngrx/store';
import { Product } from '../product.model';

export const toggleProductCard = createAction(
  '[Product] Toggle Product Card',
  props<{ showProductCard: boolean }>()
);

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ currentProductId: string }>()
);

export const loadProducts = createAction('[Product] Load');

export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);
