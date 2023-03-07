import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Product } from '../product.model';
import * as ProductActions from './product.actions';

export interface ProductState {
  showProductCard: boolean;
  currentProductId: string | null;
  products: Product[];
  error: string;
  areProductLoading: boolean;
}

const initialState: ProductState = {
  showProductCard: false,
  currentProductId: null,
  products: [],
  error: '',
  areProductLoading: false,
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');
export const getShowProductCard = createSelector(
  getProductFeatureState,
  (state) => state.showProductCard
);

export const getProducts = createSelector(
  getProductFeatureState,
  (state) => state.products
);

export const getAreProductLoading = createSelector(
  getProductFeatureState,
  (state) => state.areProductLoading
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  (state) => state.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === '') {
      return {
        id: 0,
        title: '',
        description: '',
        price: null,
        employee: null,
        reviews: [],
      };
    } else {
      return currentProductId
        ? state.products.find((p) => p.id === currentProductId)
        : null;
    }
  }
);

export const ProductReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.toggleProductCard, (state, action): ProductState => {
    return {
      ...state,
      showProductCard: action.showProductCard,
    };
  }),
  on(ProductActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId,
    };
  }),
  on(ProductActions.loadProducts, (state): ProductState => {
    return {
      ...state,
      areProductLoading: true,
    };
  }),
  on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
      areProductLoading: false,
    };
  }),
  on(ProductActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
      areProductLoading: false,
    };
  })
);
