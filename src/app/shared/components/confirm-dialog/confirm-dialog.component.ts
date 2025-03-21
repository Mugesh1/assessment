import { CommonModule } from '@angular/common';
import { Component, Inject, NgZone } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../shared.module';
import { DialogButtonModel, DialogDataListModel, DialogDataModel, dialogConfig } from './confirm-dialog-config';


export interface DialogModel {
  dialogContent?: string;
  dialogCustomButtons?: CustomButtonModel[];
  dialogCloseButtonHide?: boolean;
}

export interface CustomButtonModel {
  key: string;
  label: string;
  bgColor?: string;
  textColor?: string;
  iconPrefix?: CustomButtonIconModel;
}

export interface CustomButtonIconModel {
  iconType: 'matIcon' | 'faIcon';
  iconName: string;
  iconFontWeight?: string;
}

@Component({
  selector: 'app-confirm-dialog',
  imports: [CommonModule,SharedModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {
  DEFAULT_CUSTOM_BUTTON_BG_COLOR: string = '#3f51b5';
  DEFAULT_CUSTOM_BUTTON_TEXT_COLOR: string = 'white';


  // Find the condition that is true
  dialogTitle: string = '';
  dialogContent: string = '';
  dialogAcceptLabel: string = '';
  dialogDeclineLabel: string = '';

  dialogCustomButtons: CustomButtonModel[] = [];

  dialogCloseButtonHide: boolean = false;
  selectedConfig: DialogDataListModel;


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataModel,
public dialogRef: MatDialogRef<ConfirmDialogComponent>, private ngZone: NgZone) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    const dialogFilteredConfig = dialogConfig.find(x => x.dialogType === this.data.dialogType)
    if(dialogFilteredConfig) {
      this.selectedConfig = dialogFilteredConfig;
    }

  }

  clickedButton(buttonData: DialogButtonModel): void {
    this.ngZone.run(() => {
      this.dialogRef.close(buttonData.returnKey);
      const body = document.querySelector('body');
      body?.classList.remove('modal-open');
  });

   
  }

}
