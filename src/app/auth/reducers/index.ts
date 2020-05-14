import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {IUser} from "../model/user.model";

export interface AuthState {
  user: IUser

}

// export const reducers: ActionReducerMap<AuthState> = {};


