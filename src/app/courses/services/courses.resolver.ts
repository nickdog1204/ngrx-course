import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CourseEntityService} from "./course-entity.service";
import {filter, first, map, tap} from "rxjs/operators";

@Injectable()
export class CoursesResolver implements Resolve<boolean> {
  constructor(private courseEntityService: CourseEntityService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.courseEntityService.loaded$
      .pipe(
        tap(isLoaded => {
          if (!isLoaded) {
            this.courseEntityService.getAll()
          }
        }),
        filter(isLoaded => !!isLoaded),
        first()
      )
    return this.courseEntityService.getAll()
      .pipe(
        map(courseList => !!courseList)
      )
  }
}
