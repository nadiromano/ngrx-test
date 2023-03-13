import {
  Component, EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Store } from '@ngrx/store';
import { Product } from '../product.model';
import { State } from '../state/product.reducer';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() products!: Product[] | null;
  @Input() areProductLoading!: boolean | null;
  @Input() currentProduct!: Product | null | undefined;
  @Output() showProductCardChange: EventEmitter<MatButtonToggleChange> =
    new EventEmitter();
  @Output() currentProductSelectChange: EventEmitter<Product> =
    new EventEmitter();
  constructor(private store: Store<State>) {}
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

}
