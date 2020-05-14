import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from "../reducers";
import {select, Store} from "@ngrx/store";
import {isLoggedIn} from "./auth.selectors";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store
      .pipe(
        select(isLoggedIn),
        tap(isLoggedIn => {
          if (!isLoggedIn) {
            this.router.navigateByUrl('/login')



          }
        })
      )
  }

}
