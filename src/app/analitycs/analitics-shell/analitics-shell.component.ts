import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-analitics-shell',
  templateUrl: './analitics-shell.component.html',
  styleUrls: ['./analitics-shell.component.scss'],
})
export class AnaliticsShellComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {}
  testAdd() {
  }
}
