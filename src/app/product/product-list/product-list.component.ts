import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      title: 'Test1',
      category: 'Category 1',
      price: 11,
      employee: 'esmployee',
      description: 'test descrition',
      reviews: ['bello', 'molto bello'],
    },
    {
      title: 'Test2',
      category: 'Category 2',
      price: 21,
      employee: 'esmployee',
      description: 'test descrition',
      reviews: ['bello', 'molto bello'],
    },
    {
      title: 'Test3',
      category: 'Category 3',
      price: 31,
      employee: 'esmployee',
      description: 'test descrition',
      reviews: ['bello', 'molto bello'],
    },
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(
        map((products) =>
          products.map((product) => {
            return {
              id: product.id,
              title: product.data.title,
              category: product.data.category,
              price: product.data.price,
              employee: product.data.employee,
              reviews: product.data.reviews,
            };
          })
        )
      )
      .subscribe((products) => (this.products = products));
  }
}
