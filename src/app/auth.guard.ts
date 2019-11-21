import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UtilityService } from './common/utility/utility.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _utilityService: UtilityService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this._utilityService.IsLogged())
      {
        return true;
      }
      else
      {
        this.router.navigate(['login']);
        return false
      }
  }
}
