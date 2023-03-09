import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import * as ProductActions from '../state/product.actions';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(150),
        ],
      ],
      category: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      description: [''],
      price: ['', Validators.required],
      employee: [''],
    });
  }
  get review() {
    return this.productForm.get('review') as FormArray;
  }

  addReview() {
    this.review.push(this.fb.control(''));
  }

  onSave() {
    if (this.productForm.valid) {
      const product: Product = { ...this.productForm.value, reviews: [] };
      this.store.dispatch(ProductActions.addProduct({ product }));
      // this.productService
      //   .addProduct(product)
      //   .subscribe((res) => console.log(res));
      // // }
      // console.warn(this.productForm);
    }
  }

  onCancel() {
    this.store.dispatch(ProductActions.toggleIsProductFormVisible());
  }
}
