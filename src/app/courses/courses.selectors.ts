import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ICourse} from "./model/course";
import {adapter, ICourseListState} from "./reducers/course.reducer";

const {selectAll} = adapter.getSelectors()

const selectCoursesState = createFeatureSelector<ICourseListState>('courses')

const selectAllCourses = createSelector(
  selectCoursesState,
  selectAll
)

const selectBeginnerCourses = createSelector(
  selectAllCourses,
  it => it.filter(course => course.category == 'BEGINNER')
)

const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courseList => courseList.filter(course => course.category == 'ADVANCED')
)

const selectPromoTotal = createSelector(
  selectAllCourses,
  courseList => courseList.filter(course => course.promo).length
)

const selectIsCourseListLoaded = createSelector(
  selectCoursesState,
  state => state.isCourseListLoaded
)

export const CourseSelectors = {
  selectCoursesState,
  selectAllCourses,
  selectBeginnerCourses,
  selectAdvancedCourses,
  selectPromoTotal,
  selectIsCourseListLoaded
}
