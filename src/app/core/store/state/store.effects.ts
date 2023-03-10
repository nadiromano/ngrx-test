import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { StoreService } from '../store.service';
import * as StoreActions from './store.actions';

@Injectable({ providedIn: 'root' })
export class StoreEffect {
  constructor(private actions$: Actions, private storeService: StoreService) {}

  loadStore$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoreActions.loadStore),
      mergeMap(() =>
        this.storeService.getStore().pipe(
          map((store) => StoreActions.loadStoreSuccess({ store })),
          catchError((error) => of(StoreActions.loadStoreFailure({ error })))
        )
      )
    );
  });
}
