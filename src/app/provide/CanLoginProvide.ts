import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CanLoginGuard implements CanActivate, CanLoad {
  
  constructor(private router:Router,private snackBar: MatSnackBar){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.check();
  }

  check(): Observable<boolean> {
    return new Observable(observer => {
      const token = localStorage.getItem('token');
      console.log(`token is ${token}`);
      if (token != null) {
        console.log('已经登录');
        observer.next(true);
        observer.complete();
        return;
      }
      this.snackBar.open('没有登录，请先登录', '关闭', {
        duration: 2000,
      });
      observer.next(false);
      observer.complete();
      this.router.navigateByUrl("/login")
    });
  }
}
