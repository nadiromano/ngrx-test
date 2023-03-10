import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../state/product.reducer';
import { Product } from '../product.model';
import * as ProductActions from '../state/product.actions';
import {
  getAreProductLoading,
  getCurrentProduct,
  getIsProductFormVisible,
  getProducts,
  getShowProductCard,
} from '../state/product.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  areProductLoading$!: Observable<boolean>;
  showProductCard$!: Observable<boolean>;
  currentProduct$!: Observable<Product | null | undefined>;
  isProductFormVisible$!: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getProducts);
    this.store.dispatch(ProductActions.loadProducts());

    this.areProductLoading$ = this.store.select(getAreProductLoading);
    this.showProductCard$ = this.store.select(getShowProductCard);
    this.currentProduct$ = this.store.select(getCurrentProduct);
    this.isProductFormVisible$ = this.store.select(getIsProductFormVisible);
  }

  onShowProductCardChange(event: MatButtonToggleChange) {
    this.store.dispatch(
      ProductActions.toggleProductCard({ showProductCard: event.value })
    );
  }

  onCurrentProductSelected(product: Product) {
    this.store.dispatch(
      ProductActions.setCurrentProduct({ currentProductId: product.id })
    );
  }

  onNewProduct() {
    this.store.dispatch(ProductActions.createNewProduct());
  }

  deleteProduct(productId: string) {
    this.store.dispatch(ProductActions.deleteProduct({ productId }));
  }
}
