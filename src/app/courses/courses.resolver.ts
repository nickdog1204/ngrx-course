import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {identity, Observable} from "rxjs";
import {AppState} from "../reducers";
import {select, Store} from "@ngrx/store";
import {filter, finalize, first, tap} from "rxjs/operators";
import {CourseActionCreators} from "./course.actions";
import {CourseSelectors} from "./courses.selectors";

@Injectable()
export class CoursesResolver implements Resolve<any> {
  loading = false

  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.store
      .pipe(
        select(CourseSelectors.selectIsCourseListLoaded),
        tap(isCourseListLoaded => {
          if (!this.loading && !isCourseListLoaded) {
            this.loading = true
            this.store.dispatch(CourseActionCreators.coursesResolver_loadAllCourses())
          }
        }),
        filter(identity),
        first(),
        finalize(() => this.loading = false)
      )
  }

}
