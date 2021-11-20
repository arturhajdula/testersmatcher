import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TesterMatcherTableComponent } from './tester-matcher-table.component';

@NgModule({
  imports: [
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonModule,
    BrowserModule
  ],
  declarations: [
    TesterMatcherTableComponent
  ],
  exports: [
    TesterMatcherTableComponent
  ]
})
export class TesterMatcherTableModule { }
