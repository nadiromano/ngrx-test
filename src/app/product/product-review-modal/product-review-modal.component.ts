import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-review-modal',
  templateUrl: './product-review-modal.component.html',
  styleUrls: ['./product-review-modal.component.scss'],
})
export class ProductReviewModalComponent {
  reviews: string[] = [];
  btnText = 'ok';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ProductReviewModalComponent>
  ) {
    if (data) {
      this.reviews = data.reviews || this.reviews;
    }
    this.dialogRef.updateSize('50vw', '50vw');
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
