import { Component, Input, OnInit } from '@angular/core';
import { UsersWithExperienceDataSource } from '../users-with-experience-data-source';

@Component({
  selector: 'tester-matcher-table',
  templateUrl: './tester-matcher-table.component.html',
  styleUrls: ['./tester-matcher-table.component.scss']
})
export class TesterMatcherTableComponent implements OnInit {

  @Input() dataSource: UsersWithExperienceDataSource;
  @Input() waitingForData: boolean;

  displayedColumns: string[];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['userName', 'experience'];
  }

}