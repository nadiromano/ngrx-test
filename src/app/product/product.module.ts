import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const productRoutes: Routes = [{ path: '', component: ProductShellComponent }];

@NgModule({
  declarations: [ProductShellComponent, ProductListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(productRoutes),
  ],
})
export class ProductModule {}
