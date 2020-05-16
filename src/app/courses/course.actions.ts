import {createAction, props} from '@ngrx/store';
import {ICourse} from "./model/course";


// more of a command than an event
export const coursesResolver_loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
)

// more than an event
export const loadCoursesEffect_allCoursesLoaded = createAction(
  '[Load Courses Effect] All Courses Loaded',
  props<{ courseList: ICourse[] }>()
)

export const CourseActionCreators = {
  coursesResolver_loadAllCourses,
  loadCoursesEffect_allCoursesLoaded
}

