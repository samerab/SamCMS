import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
