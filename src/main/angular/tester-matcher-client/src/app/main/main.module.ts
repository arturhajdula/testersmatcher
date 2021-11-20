import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { TesterMatcherTableModule } from './tester-matcher-table/tester-matcher-table.module';
import { TesterMatcherFiltersModule } from './tester-matcher-filters/tester-matcher-filters.module';
import { TesterMatcherService } from './tester-matcher.service';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    TesterMatcherTableModule,
    TesterMatcherFiltersModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    TesterMatcherService
  ]
})
export class MainModule { }
