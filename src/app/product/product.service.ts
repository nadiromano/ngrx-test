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

  addProduct(product: Product) {
    return this.http.post(
      `${this.baseUrl}/stores/${this.storeId}/products`,
      product,
      { responseType: 'text', observe: 'events' }
    );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
