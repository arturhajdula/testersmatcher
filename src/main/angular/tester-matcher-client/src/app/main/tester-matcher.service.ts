import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Configuration } from '../shared/const/configuration';
import { UserWithExperience } from '../shared/model/user-with-experience';
import { TextUtil } from '../shared/util/text-util';


@Injectable()
export class TesterMatcherService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsersWithExperience(countries: Set<string>, deviceNames: Set<string>): Observable<UserWithExperience[]> {
    const usersWithExperienceUrl = `${Configuration.API}/getUsersWithExperience`;
    return this.httpClient.get<UserWithExperience[]>(usersWithExperienceUrl, {
      params: {
        countries: `${TextUtil.toStringSet(countries)}`,
        deviceNames: `${TextUtil.toStringSet(deviceNames)}`,
      }
    });
  }
}
