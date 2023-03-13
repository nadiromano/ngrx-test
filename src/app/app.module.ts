import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShellComponent } from './core/layout/shell/shell.component';
import { NavigationComponent } from './core/layout/navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { ErrorSnackBarComponent } from './core/error-snack-bar/error-snack-bar.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'BackOffice Demo App Devtools',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [RouterModule, StoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
