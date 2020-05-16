import {Action, createReducer, on} from '@ngrx/store';
import {compareCourses, ICourse} from "../model/course";
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {CourseActionCreators} from "../course.actions";

export interface ICourseListState extends EntityState<ICourse> {
  isCourseListLoaded: boolean

}

// export interface CourseListState {
//   entityMap: { [key: number]: ICourse }
//   idList: number[]
// }

export const adapter = createEntityAdapter<ICourse>({
  sortComparer: compareCourses,
  // selectId: course => course.id
})

export const initialState: ICourseListState = adapter.getInitialState({
  isCourseListLoaded: false
})

export const courseListReducer = createReducer(
  initialState,
  on(CourseActionCreators.loadCoursesEffect_allCoursesLoaded,
    (state, action) => adapter.addMany(action.courseList, {
      ...state,
      isCourseListLoaded: true
    })),
  on(CourseActionCreators.editCourseDialog_courseUpdated, (state, action) =>
    adapter.updateOne(action.update, state)
  )
)

// export const {
//   selectAll
// } = adapter.getSelectors()


// export function reducer(state = initialState, action: Action): CourseListState {
//   switch (action.type) {
//
//     default:
//       return state;
//   }
// }
