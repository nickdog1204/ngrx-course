import {Action, createAction, props} from '@ngrx/store';
import {IUser} from "./model/user.model";

// enum AuthActionTypes {
//   LogInPageUserLogIn = '[LogIn Page] User LogIn',
//   TopMenuUserLogOut = '[Top Menu] User LogOut'
// }


// export class LogInPageUserLoginAction implements Action {
//   readonly type = AuthActionTypes.LogInPageUserLogIn
//
//   private constructor(private user: IUser) {
//   }
//
//   static create(user: IUser) {
//     return new LogInPageUserLoginAction(user)
//   }
//
// }
//
// export class TopMenuUserLogOutAction implements Action {
//   readonly type = AuthActionTypes.TopMenuUserLogOut
//
//   private constructor() {
//   }
//
//   static create(user: IUser) {
//     return new TopMenuUserLogOutAction()
//   }
//
// }


// export type AuthActions = LoadAuths;

// export class LogInPageUserLogInPayloadMixIn {
//   private constructor(public user: IUser) {
//   }
//
//   static create(user: IUser) {
//     return new LogInPageUserLogInPayloadMixIn(user)
//   }
// }

const createLogInPageUserLoginAction = createAction(
  '[LogIn Page] User LogIn',
  props<{ user: IUser }>()
)


const createTopMenuUserLogOutAction = createAction(
  '[Top Menu] User LogOut'
)


export const AuthActionCreators = {
  createLogInPageUserLoginAction,
  createTopMenuUserLogOutAction
}
