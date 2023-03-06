import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
