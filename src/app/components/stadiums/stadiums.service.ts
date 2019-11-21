import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { kconfig } from '../../globals';

@Injectable()
export class StadiumsService {

  constructor( private _http:HttpClient ) { }

  /** GET Stadiums from the server */
  getListStadiums () {
    return this._http.get( kconfig.apiUrl + "controller.stadiums.php?accion=GetListStadiums");
  }
}
