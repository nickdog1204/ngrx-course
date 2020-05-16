import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {CourseActionCreators} from "./course.actions";
import {CoursesHttpService} from "./services/courses-http.service";
import {concatMap, map, tap} from "rxjs/operators";
import {ICourse} from "./model/course";


@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(CourseActionCreators.coursesResolver_loadAllCourses),
        concatMap(action => {
          return this.coursesHttpService.findAllCourses()
        }),
        map(courseList => CourseActionCreators.loadCoursesEffect_allCoursesLoaded({courseList}))
      )
  )

  saveCourse$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(CourseActionCreators.editCourseDialog_courseUpdated),
        concatMap(action => this.coursesHttpService.saveCourse(
          action.update.id,
          action.update.changes
        ))
      ),
    {dispatch: false}
  )


  constructor(
    private actions$: Actions,
    private coursesHttpService: CoursesHttpService) {
  }

}
