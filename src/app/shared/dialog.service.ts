import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openConfirmDialog(){
    this.dialog.open(MatConfirmDialogComponent, {
      width: '400px',
      disableClose: true
    });
  }
}
