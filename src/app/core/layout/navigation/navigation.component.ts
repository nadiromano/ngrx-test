import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import * as StoreActions from '../../store/state/store.actions';
import { getStoreInfo } from '../../store/state/store.reducer';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private store: Store<State>) {}
  storeInfo$!: Observable<string>;

  ngOnInit(): void {
    this.store.dispatch(StoreActions.loadStore());
    this.storeInfo$ = this.store.select(getStoreInfo);
  }
}
