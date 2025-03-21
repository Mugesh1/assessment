export interface DialogDataModel {
  message: string;
  dialogType: DialogType;
  dataList?: any;

}

export interface DialogDataListModel {
  message: string;
  dialogType: DialogType;
  title: string;
  buttons: DialogButtonModel[];
}

export interface DialogButtonModel {
  label: string;
  returnKey: any;
  isFocus?: boolean;
  background: string;
}

export type DialogType = 'YesNo' | 'Ok' | 'YesNoCancel' | 'Leave' | 'Grid' | 'Download' | 'ContinueStop';

export const dialogConfig: DialogDataListModel[] = [
  {
    dialogType: 'Ok',
    title: 'Alert',
    message: '',
    buttons: [
      {
        label: 'Ok',
        returnKey: true,
        isFocus: true,
        background: '#3f51b5'
      },
    ],
  },
  {
    dialogType: 'Download',
    title: 'Download or Preview',
    message: '',
    buttons: [
      {
        label: 'Download',
        returnKey: true,
        isFocus: true,
        background: '#3f51b5'
      },
      {
        label: 'Preview',
        returnKey: false,
        background: 'rgb(236 0 23)'
      },
    ],
  },
  {
    dialogType: 'YesNoCancel',
    title: 'Confirm',
    message: '',
    buttons: [
      {
        label: 'Yes',
        returnKey: 'yes',
        isFocus: true,
        background: '#3f51b5'

      },
      {
        label: 'No',
        returnKey: 'no',
        background: 'rgb(236 0 23)'
      },
      {
        label: 'Cancel',
        returnKey: 'cancel',
        background: '#dc3545'

      },
    ],
  },
  {
    dialogType: 'YesNo',
    title: 'Confirm',
    message: '',
    buttons: [
      {
        label: 'Yes',
        returnKey: true,
        isFocus: true,
        background: '#3f51b5'
      },
      {
        label: 'No',
        returnKey: false,
        background: 'rgb(236 0 23)'
      },
    ],
  },
  {
    dialogType: 'ContinueStop',
    title: 'Warning',
    message: '',
    buttons: [
      {
        label: 'Continue',
        returnKey: true,
        isFocus: true,
        background: '#3f51b5'
      },
      {
        label: 'Stop',
        returnKey: false,
        background: 'rgb(236 0 23)'
      },
    ],
  },
  {
    dialogType: 'Leave',
    title: 'Leave',
    message: '',
    buttons: [
      {
        label: 'Leave',
        returnKey: true,
        isFocus: true,
        background: '#3f51b5'
      },
      {
        label: 'Stay',
        returnKey: false,
        background: 'rgb(236 0 23)'
      },
    ],
  },
  {
    dialogType: 'Grid',
    title: 'Discard',
    message: '',
    buttons: [
      {
        label: 'Continue Editing',
        returnKey: true,
        isFocus: true,
        background: '#3f51b5'
      },
      {
        label: 'Yes, Exit Editing',
        returnKey: false,
        background: 'rgb(236 0 23)'
      },
    ],
  },
]