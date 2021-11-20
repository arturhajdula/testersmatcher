import { Component, OnInit } from '@angular/core';
import { FiltersSelection } from '../shared/model/filters-selection';
import { TesterMatcherService } from './tester-matcher.service';
import { UsersWithExperienceDataSource } from './users-with-experience-data-source';

@Component({
  selector: 'main-app',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  usersWithExperienceDataSource: UsersWithExperienceDataSource;

  constructor(
    private testerMatcherService: TesterMatcherService
  ) { }

  ngOnInit(): void {
    this.usersWithExperienceDataSource = new UsersWithExperienceDataSource(null);
  }

  onFiltersSelected(filtersSelection: FiltersSelection) {
    this.usersWithExperienceDataSource = null;
    this.executeAlgorithm(filtersSelection.countries, filtersSelection.devices);
  }

  private executeAlgorithm(countries: Set<string>, devices: Set<string>) {
    this.testerMatcherService.getUsersWithExperience(countries, devices)
      .subscribe(ret => this.usersWithExperienceDataSource = new UsersWithExperienceDataSource(ret));
  }
}
