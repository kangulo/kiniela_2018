import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { kconfig } from '../../globals';

@Injectable()
export class RegisterService {

  constructor( private _http:HttpClient ) { }

  /** GET Stadiums from the server */
  SendInvitation (data:any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    }
    
    return this._http.post( kconfig.apiUrl + "controller.admin.php?accion=SendInvitation", data, httpOptions )
    .map(res =>  res );
  }

  /** POST activation of a prediction */
  ActivatePrediction (data:any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    }
    
    return this._http.post( kconfig.apiUrl + "controller.predictions.php?accion=ActivatePrediction", data, httpOptions )
    .map(res =>  res );
  }

}
