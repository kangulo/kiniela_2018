import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { kconfig } from '../../globals';

@Injectable()
export class MatchesService {

  constructor( private _http:HttpClient ) { }

  /** GET Matches from the server */
  getListMatches () {
    return this._http.get(kconfig.apiUrl + "controller.matches.php?accion=GetListMatches");
  }

  /** GET TotalPlayers from the server */
  getTotalPlayers () {
    return this._http.get(kconfig.apiUrl + "controller.matches.php?accion=GetTotalPlayers").map(res =>  res );
  }

}