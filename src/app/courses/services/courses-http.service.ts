

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICourse} from "../model/course";
import {map} from "rxjs/operators";
import {ILesson} from "../model/lesson";


@Injectable()
export class CoursesHttpService {

    constructor(private http:HttpClient) {

    }

    findAllCourses(): Observable<ICourse[]> {
        return this.http.get('/api/courses')
            .pipe(
                map(res => res['payload'])
            );
    }

    findCourseByUrl(courseUrl: string): Observable<ICourse> {
      return this.http.get<ICourse>(`/api/courses/${courseUrl}`);
    }

    findLessons(
        courseId:number,
        pageNumber = 0, pageSize = 3):  Observable<ILesson[]> {

        return this.http.get<ILesson[]>('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('sortOrder', 'asc')
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    }


    saveCourse(courseId: number | string, changes: Partial<ICourse>) {
        return this.http.put('/api/course/' + courseId, changes);
    }


}
