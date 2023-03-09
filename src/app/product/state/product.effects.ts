import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of, tap } from 'rxjs';
import { ProductService } from '../product.service';
import * as ProductActions from './product.actions';
@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) =>
            products.map((product) => {
              return {
                id: product.id,
                title: product.data.title,
                description: product.data.description,
                category: product.data.category,
                price: product.data.price,
                employee: product.data.employee,
                reviews: product.data.reviews,
              };
            })
          ),
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  addProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addProduct),
      concatMap((action) =>
        this.productService.addProduct(action.product).pipe(
          map((productId) => {
            return { ...action.product, id: productId };
          }),
          map((product) => ProductActions.addProductSuccess({ product })),
          catchError((error) => of(ProductActions.addProductFailure({ error })))
        )
      )
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      concatMap((action) =>
        this.productService.deleteProduct(action.productId).pipe(
          map((_) =>
            ProductActions.deleteProductSuccess({ productId: action.productId })
          ),
          catchError((error) =>
            of(ProductActions.deleteProductFailure({ error }))
          )
        )
      )
    );
  });
}
