import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router} from '@angular/router';
import { Observable } from 'rxjs';

import {AuthService} from 'src/authentication/auth.services/auth.service';

@Injectable()
export class CanloadGuard implements CanLoad {
  constructor(private active: AuthService, private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.active.authenticated){
      this.router.navigate(['auth/login']);
      return false;
    }
    return this.active.authenticated;
  }
}
