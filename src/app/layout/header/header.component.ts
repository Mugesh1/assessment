import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthStore } from '../../core/store/auth.store';
import { DialogType } from '../../shared/components/confirm-dialog/confirm-dialog-config';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  private authStore = inject(AuthStore);

  constructor(private dialog: MatDialog) { }
  
  onLogOut() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Are you want to logout ?',
        dialogType: 'YesNo' as DialogType,
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.authStore.logout();
      }
    })
  }
}
