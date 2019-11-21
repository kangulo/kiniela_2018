import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { CountdownComponent } from './countdown/countdown.component';

import { kconfig } from '../../globals';

@Injectable()
export class DashboardService {

  constructor( private _http:HttpClient ) { }

  /** GET Matches from the server */
  getLeaderboard () {
    return this._http.get(kconfig.apiUrl + "controller.dashboard.php?accion=GetLeaderboard").map(res =>  res );
  }

}
