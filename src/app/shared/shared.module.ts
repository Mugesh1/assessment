import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MaterialModule,FormsModule,
    ReactiveFormsModule,RouterModule
  ],
  exports: [
    MaterialModule,FormsModule,
    ReactiveFormsModule,RouterModule
  ]
})
export class SharedModule { }
