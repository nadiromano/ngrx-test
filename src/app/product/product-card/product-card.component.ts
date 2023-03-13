import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ProductReviewModalComponent } from '../product-review-modal/product-review-modal.component';
import { Product } from '../product.model';
import { State } from '../state/product.reducer';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() products!: Product[] | null;
  @Input() areProductLoading!: boolean | null;
  @Input() currentProduct!: Product | null | undefined;
  @Output() showProductCardChange: EventEmitter<MatButtonToggleChange> =
    new EventEmitter();
  @Output() currentProductSelectChange: EventEmitter<Product> =
    new EventEmitter();
  constructor(private dialog: MatDialog) {}
  @Output() onDeleteProduct: EventEmitter<string> = new EventEmitter();

  onShowProductCardChange(event: MatButtonToggleChange) {
    this.showProductCardChange.emit(event);
  }

  onCurrentProductSelected(product: Product) {
    this.currentProductSelectChange.emit(product);
  }

  deleteProduct(productId: string) {
    this.onDeleteProduct.emit(productId);
  }

  openAlertDialog(product: Product) {
    const dialogRef = this.dialog.open(ProductReviewModalComponent, {
      data: {
        reviews: product.reviews,
        buttonText: {
          cancel: 'Done',
        },
      },
    });
  }
}
