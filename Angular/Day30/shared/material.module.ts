import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [MatConfirmDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports:[
    MatDialogModule,
    MatIconModule
  ]
})
export class MaterialModule { }
