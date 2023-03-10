import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreModel } from './store.model';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://us-central1-test-b7665.cloudfunctions.net/api';
  private storeId = 'ijpxNJLM732vm8AeajMR';

  getStore(): Observable<StoreModel> {
    return this.http.get<StoreModel>(`${this.baseUrl}/stores/${this.storeId}`);
  }
}
