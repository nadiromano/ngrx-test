import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://us-central1-test-b7665.cloudfunctions.net/api';
  private storeId = 'ijpxNJLM732vm8AeajMR';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<{ id: string; data: Product }[]> {
    return this.http
      .get<{ id: string; data: Product }[]>(
        `${this.baseUrl}/stores/${this.storeId}/products`
      )
      .pipe(
        map((products) => products),
        catchError(this.handleError)
      );
  }

  addProduct(product: Product): Observable<string> {
    return this.http
      .post(`${this.baseUrl}/stores/${this.storeId}/products`, product, {
        responseType: 'text',
      })
      .pipe(catchError(this.handleError));
  }

  deleteProduct(productId: string) {
    return this.http
      .delete(`${this.baseUrl}/stores/${this.storeId}/products/${productId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: any) {
    let message = 'Impossible connect with the DB ';

    return throwError(() => message);
  }
}
