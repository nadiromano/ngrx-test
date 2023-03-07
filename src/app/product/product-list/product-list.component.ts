import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { Product } from '../product.model';
import * as ProductActions from '../state/product.actions';
import {
  getAreProductLoading,
  getProducts,
  getShowProductCard
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
  panelOpenState = false;

  constructor(private store: Store<State> , public dialog: MatDialog) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getProducts);
    this.store.dispatch(ProductActions.loadProducts());

    this.areProductLoading$ = this.store.select(getAreProductLoading);
    this.showProductCard$ = this.store.select(getShowProductCard);
  }

  onShowProductCardChange(event: MatButtonToggleChange) {
    this.store.dispatch(
      ProductActions.toggleProductCard({ showProductCard: event.value })
    );
  }

  onCurrentProductSelected(product: Product) {
    console.log(product);
  }
}
