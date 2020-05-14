import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {AppState} from "./reducers";
import {isLoggedIn, isLoggedOut} from "./auth/auth.selectors";
import {AuthActionCreators} from "./auth/auth.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  loading = true;
  isLoggedIn$: Observable<boolean>
  isLoggedOut$: Observable<boolean>

  constructor(private router: Router, private store: Store<AppState>) {

  }

  ngOnInit() {

    const userProfileStrFromLocalStorage = localStorage.getItem('user')
    if (userProfileStrFromLocalStorage) {
      const user = JSON.parse(userProfileStrFromLocalStorage)
      this.store.dispatch(AuthActionCreators.createLogInPageUserLoginAction({user}))
    }

    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      )
    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      )
  }

  logout() {
    this.store.dispatch(AuthActionCreators.createTopMenuUserLogOutAction())

  }

  ngOnDestroy(): void {
    console.log('appComponent destroyed')
  }
}
