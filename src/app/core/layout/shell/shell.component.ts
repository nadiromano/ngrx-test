import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getError, State } from 'src/app/product/state/product.reducer';
import * as StoreActions from '../../store/state/store.actions';
import { getStoreError, getStoreInfo } from '../../store/state/store.reducer';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(private store: Store<State>) {}
  error$!: Observable<string>;
  storeInfo$!: Observable<string>;
  storeError$!: Observable<string>;
  ngOnInit(): void {
    this.error$ = this.store.select(getError);
    this.storeError$ = this.store.select(getStoreError);
    this.store.dispatch(StoreActions.loadStore());
    this.storeInfo$ = this.store.select(getStoreInfo);
  }
}
