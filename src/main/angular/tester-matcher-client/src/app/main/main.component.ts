import { Component, OnInit } from '@angular/core';
import { FiltersSelection } from '../shared/model/filters-selection';
import { UserWithExperience } from '../shared/model/user-with-experience';
import { TesterMatcherService } from './tester-matcher.service';
import { UsersWithExperienceDataSource } from './users-with-experience-data-source';

@Component({
  selector: 'main-app',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  usersWithExperienceDataSource: UsersWithExperienceDataSource;
  waitingForData: boolean;

  constructor(
    private testerMatcherService: TesterMatcherService
  ) { }

  ngOnInit(): void {
    this.usersWithExperienceDataSource = new UsersWithExperienceDataSource(null);
    this.waitingForData = false;
  }

  onFiltersSelected(filtersSelection: FiltersSelection) {
    this.waitingForData = true;
    this.executeAlgorithm(filtersSelection.countries, filtersSelection.devices);
  }

  private executeAlgorithm(countries: Set<string>, devices: Set<string>) {
    this.testerMatcherService.getUsersWithExperience(countries, devices)
      .subscribe((ret: UserWithExperience[]) => {
        this.usersWithExperienceDataSource.setData(ret);
        this.waitingForData = false;
      });
  }
}
