import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-snackbar',
  imports: [CommonModule,SharedModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dismiss()
    }, 10000);
  }

  dismiss(): void {
    this.snackBarRef.dismiss();
  }
}
