import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { Product } from '../product.model';
import * as ProductActions from './product.actions';

export interface ProductState {
  showProductCard: boolean;
  currentProductId: string | null;
  products: Product[];
  error: string;
  areProductLoading: boolean;
  isProductFormVisible: boolean;
}

export interface State extends AppState.State {
  products: ProductState;
}

const initialState: ProductState = {
  showProductCard: false,
  currentProductId: null,
  products: [],
  error: '',
  areProductLoading: false,
  isProductFormVisible: false,
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

export const getIsProductFormVisible = createSelector(
  getProductFeatureState,
  (state) => state.isProductFormVisible
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
        id: '',
        title: '',
        description: '',
        category: '',
        price: 0,
        employee: '',
        reviews: [],
      } as Product;
    } else {
      return currentProductId
        ? state.products.find((p) => p.id === currentProductId)
        : null;
    }
  }
);

export const getError = createSelector(
  getProductFeatureState,
  (state) => state.error
);

export const ProductReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.toggleProductCard, (state, action): ProductState => {
    return {
      ...state,
      showProductCard: action.showProductCard,
    };
  }),
  on(ProductActions.toggleIsProductFormVisible, (state): ProductState => {
    return {
      ...state,
      isProductFormVisible: !state.isProductFormVisible,
    };
  }),
  on(ProductActions.createNewProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: '',
      isProductFormVisible: true,
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
  }),
  on(ProductActions.addProduct, (state): ProductState => {
    return {
      ...state,
      areProductLoading: true,
    };
  }),
  on(ProductActions.addProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: [...state.products, action.product],
      error: '',
      isProductFormVisible: false,
      areProductLoading: false,
    };
  }),
  on(ProductActions.addProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
      areProductLoading: false,
    };
  }),
  on(ProductActions.deleteProduct, (state, action): ProductState => {
    return {
      ...state,
      areProductLoading: true,
    };
  }),
  on(ProductActions.deleteProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.productId
      ),
      currentProductId: null,
      error: '',
      areProductLoading: false,
    };
  }),
  on(ProductActions.deleteProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
      areProductLoading: false,
    };
  })
);
