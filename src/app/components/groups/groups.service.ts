import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { kconfig } from '../../globals';

@Injectable()
export class GroupsService {

  constructor( private _http:HttpClient ) { }

  /** GET Matches from the server */
  getTeams () {
    return this._http.get(kconfig.apiUrl + "controller.teams.php?accion=GetTeams");
  }

  /** GET Matches from the server */
  getGroups () {
    return this._http.get(kconfig.apiUrl + "controller.teams.php?accion=GetGroups");
  }

}
