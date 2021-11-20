import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { TesterMatcherFiltersComponent } from './tester-matcher-filters.component';
import { TesterMatcherFiltersApiService } from './tester-matcher-filters.service';
import { MultiSelectModule } from '../../shared/components/multiselect/multiselect.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MultiSelectModule,
    MatExpansionModule,
  ],
  declarations: [
    TesterMatcherFiltersComponent
  ],
  exports: [
    TesterMatcherFiltersComponent
  ],
  providers: [
    TesterMatcherFiltersApiService
  ]
})
export class TesterMatcherFiltersModule { }
