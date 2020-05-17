import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {ICourse} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class CoursesDataService extends DefaultDataService<ICourse> {

  constructor(httpClient: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Course', httpClient, httpUrlGenerator)
  }

  getAll(): Observable<ICourse[]> {
    return this.http.get('/api/courses')
      .pipe(
        map(res => res['payload'])
      )
  }
}
