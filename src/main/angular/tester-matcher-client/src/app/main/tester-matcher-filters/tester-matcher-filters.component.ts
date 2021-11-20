import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { FiltersSelection } from 'src/app/shared/model/filters-selection';
import { TesterMatcherFiltersApiService } from './tester-matcher-filters.service';

@Component({
  selector: 'tester-matcher-filters',
  templateUrl: './tester-matcher-filters.component.html',
  styleUrls: ['./tester-matcher-filters.component.scss']
})
export class TesterMatcherFiltersComponent implements OnInit {

  @Output() filtersSelected: EventEmitter<FiltersSelection> = new EventEmitter<FiltersSelection>();

  selectCountriesTitle: string;
  selectDevicesTitle: string;
  filtersTitle: string;

  countriesOptions: { key: number; value: string; }[];
  devicesOptions: { key: number; value: string; }[];

  countriesSelected: Set<string>;
  devicesSelected: Set<string>;

  constructor(
    private testerMatcherFiltersApiService: TesterMatcherFiltersApiService
  ) { }

  ngOnInit(): void {
    this.selectCountriesTitle = `Select countries`;
    this.selectDevicesTitle = `Select devices`;
    this.filtersTitle = `Filters`;

    this.clearFilter();

    this.testerMatcherFiltersApiService.getCountries().pipe(
      map((countries: string[], index: number) => countries.map((country, index) => ({ key: index, value: country })))
    ).subscribe(c => this.countriesOptions = c);

    this.testerMatcherFiltersApiService.getDeviceNames().pipe(
      map((devices: string[], index: number) => devices.map((device, index) => ({ key: index, value: device })))
    ).subscribe(c => this.devicesOptions = c);

  }

  clearFilter() {
    
    this.countriesSelected = new Set<string>();
    this.devicesSelected = new Set<string>();
  }

  onFilterCountriesChange(selectionValues: Set<string>) {
    this.countriesSelected = selectionValues;
    this.emitFiltersSelection();
  }

  onFilterDevicesChange(selectionValues: Set<string>) {
    this.devicesSelected = selectionValues;
    this.emitFiltersSelection();
  }

  private emitFiltersSelection() {
    this.filtersSelected.emit({
      countries: this.countriesSelected,
      devices: this.devicesSelected
    });
  }
}
