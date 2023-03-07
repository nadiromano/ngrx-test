import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  // productForm = this.fb.group({
  //   title: new FormControl('', Validators.required),
  //   description: ['', Validators.required],
  //   price: [0, Validators.required],
  //   employee: ['', Validators.required],
  //   review: this.fb.array([this.fb.control('')]),
  // });
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      description: ['', Validators.required],
      price: ['', Validators.required],
      employee: ['', Validators.required],
      review: this.fb.array([this.fb.control('')]),
    });
  }
  get review() {
    return this.productForm.get('review') as FormArray;
  }

  addAlias() {
    this.review.push(this.fb.control(''));
  }

  onSave() {
    // TODO: Use EventEmitter with form value
    console.warn(this.productForm);
  }

  onCancel(){
    
  }
}
