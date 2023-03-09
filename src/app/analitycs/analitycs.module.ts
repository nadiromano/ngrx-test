import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliticsShellComponent } from './analitics-shell/analitics-shell.component';
import { RouterModule, Routes } from '@angular/router';

const analitycsRoutes: Routes = [
  {
    path: '',
    component: AnaliticsShellComponent,
  },
];

@NgModule({
  declarations: [
    AnaliticsShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(analitycsRoutes),

  ]
})
export class AnalitycsModule { }
