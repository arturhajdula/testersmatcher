import { DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject } from "rxjs";
import { UserWithExperience } from "../shared/model/user-with-experience";

export class UsersWithExperienceDataSource extends DataSource<UserWithExperience> {
    private _dataStream = new BehaviorSubject<UserWithExperience[]>(null);
  
    constructor(initialData: UserWithExperience[]) {
      super();
      this.setData(initialData);
    }
  
    connect(): Observable<UserWithExperience[]> {
      return this._dataStream;
    }
  
    disconnect() {}
  
    setData(data: UserWithExperience[]) {
      this._dataStream.next(data);
    }
  }