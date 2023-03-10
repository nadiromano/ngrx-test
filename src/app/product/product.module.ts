import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material/material.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductEffects } from './state/product.effects';
import { ProductReducer } from './state/product.reducer';
import { NewProductComponent } from './new-product/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorSnackBarComponent } from '../core/error-snack-bar/error-snack-bar.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductShellComponent,
  },
];

@NgModule({
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    NewProductComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', ProductReducer),
    EffectsModule.forFeature([ProductEffects]),
    ReactiveFormsModule,
  ],
  providers: [ErrorSnackBarComponent],
})
export class ProductModule {}
