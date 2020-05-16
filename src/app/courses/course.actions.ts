import {createAction, props} from '@ngrx/store';
import {ICourse} from "./model/course";
import {Update} from "@ngrx/entity";


// more of a command than an event
const coursesResolver_loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
)

// more than an event
const loadCoursesEffect_allCoursesLoaded = createAction(
  '[Load Courses Effect] All Courses Loaded',
  props<{ courseList: ICourse[] }>()
)

const editCourseDialog_courseUpdated = createAction(
  '[Edit Course Dialog] Course Updated',
  props<{ update: Update<ICourse> }>()
)


export const CourseActionCreators = {
  coursesResolver_loadAllCourses,
  loadCoursesEffect_allCoursesLoaded,
  editCourseDialog_courseUpdated
}

