import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Configuration } from 'src/app/shared/const/configuration';


@Injectable()
export class TesterMatcherFiltersApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCountries(): Observable<string[]> {
    const countriesUrl = `${Configuration.API}/getCountries`;
    return this.httpClient.get<string[]>(countriesUrl);
  }

  getDeviceNames(): Observable<string[]> {
    const devicesUrl = `${Configuration.API}/getDeviceNames`;
    return this.httpClient.get<string[]>(devicesUrl);
  }
}
