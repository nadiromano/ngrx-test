import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { StoreModel } from './store.model';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://us-central1-test-b7665.cloudfunctions.net/api';
  private storeId = 'ijpxNJLM732vm8AeajMR';

  getStore(): Observable<StoreModel> {
    return this.http
      .get<StoreModel>(`${this.baseUrl}/stores/${this.storeId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: any) {
    let message = 'Impossible connect with the DB ';

    return throwError(() => message);
  }
}
