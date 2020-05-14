import {Injectable} from '@angular/core';
import {AuthActionCreators} from "./auth.actions";
import {filter, tap} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";


@Injectable()
export class AuthEffects {
  logInEffect$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActionCreators.createLogInPageUserLoginAction),
          tap(action => localStorage.setItem('user', JSON.stringify(action.user))
          )
        )
    , {dispatch: false})

  logOutEffect$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(AuthActionCreators.createTopMenuUserLogOutAction),
        tap(action => {
          localStorage.removeItem('user')
          this.router.navigateByUrl('/login')
        })
      ),
    {dispatch: false}
  )

  constructor(private actions$: Actions, private router: Router) {
    // login$.subscribe()


    // actions$.subscribe(action => {
    //   if (action.type == AuthActionCreators.createLogInPageUserLoginAction.type) {
    //     localStorage.setItem('user', JSON.stringify(action['user']))
    //   }
    //
    // })
  }

}
