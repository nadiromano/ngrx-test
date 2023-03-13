import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-snack-bar',
  templateUrl: './error-snack-bar.component.html',
  styleUrls: ['./error-snack-bar.component.scss'],
})
export class ErrorSnackBarComponent implements OnInit {
  @Input() error: string | null = '';
  constructor() {}

  ngOnInit(): void {
  }
}
