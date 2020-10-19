import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from 'src/authentication/auth.services/auth.service';

@Injectable()
export class Canloadflyfeeds implements CanLoad{

  constructor(private active: AuthService) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.active.authenticated;
  }
}
