import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreEffect } from './state/store.effects';
import { StoreReducer } from './state/store.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('store', StoreReducer),

    EffectsModule.forFeature([StoreEffect]),
  ],
})
export class StoreModuleApp {}
