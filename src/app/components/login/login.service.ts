import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

import { User } from '../../classes/User';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { kconfig } from '../../globals';

@Injectable()
export class LoginService {
  


  constructor( private _http:HttpClient) { 
  }

  /** POST activation of a prediction */
  Login (data:any): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    }

    return <any> this._http.post( kconfig.apiUrl + "controller.login.php?accion=Login", data, httpOptions )
    .map(res =>  res );

  }

}
