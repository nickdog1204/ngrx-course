import { courseListReducer, initialState } from './course.reducer';

describe('Course Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = courseListReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
