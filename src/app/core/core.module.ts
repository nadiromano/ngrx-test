import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { StoreEffect } from './store/state/store.effects';
import { StoreReducer } from './store/state/store.reducer';
import { StoreModuleApp } from './store/store.module';
import { ErrorSnackBarComponent } from './error-snack-bar/error-snack-bar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ShellComponent } from './layout/shell/shell.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  declarations: [
    ShellComponent,
    NavigationComponent,
    ErrorSnackBarComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModuleApp,
    StoreModule.forFeature('store', StoreReducer),
    EffectsModule.forFeature([StoreEffect]),
  ],
})
export class CoreModule {}
