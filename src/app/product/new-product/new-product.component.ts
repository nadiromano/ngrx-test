import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../state/product.reducer';
import { Product } from '../product.model';
import * as ProductActions from '../state/product.actions';
import { BehaviorSubject, Observable } from 'rxjs';
import { getStoreEmployee } from 'src/app/core/store/state/store.reducer';
import { MatSelectChange } from '@angular/material/select';
import { ErrorSnackBarComponent } from 'src/app/core/error-snack-bar/error-snack-bar.component';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;
  employees$!: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private errorModal: ErrorSnackBarComponent
  ) {}

  ngOnInit() {
    this.employees$ = this.store.select(getStoreEmployee);
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
      reviews: this.fb.array([this.fb.control('')]),
    });
  }

  get reviews() {
    return this.productForm.get('reviews') as FormArray;
  }

  addReview() {
    this.reviews.push(this.fb.control(''));
  }

  onSave() {
    if (this.productForm.valid) {
      const product: Product = { ...this.productForm.value };
      this.store.dispatch(ProductActions.addProduct({ product }));
      return;
    } else {
      this.errorModal.openSnackBar(
        'Please fill all the required fields',
        'close'
      );
      this.productForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.store.dispatch(ProductActions.toggleIsProductFormVisible());
  }

  onSelectionEmployeeChange(event: MatSelectChange) {
    this.productForm.patchValue({ employee: event.value });
  }
}
