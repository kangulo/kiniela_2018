import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { ListPredictions } from "../../classes/ListPredictions";
import { Prediction } from "../../classes/Prediction";

import { kconfig } from '../../globals';

@Injectable()
export class PredictionsService {

  constructor( private _http:HttpClient ) { }

  /** GET Matches from the server */
  GetPredictionDetails ( data: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    }

    return this._http.post<Prediction>( kconfig.apiUrl + "controller.predictions.php?accion=GetPredictionDetails", data, httpOptions )
    .map(res =>  res );
  }
  /** POST activation of a prediction */
  GetPredictionGroupDetails (data:any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    }
    
    return this._http.post( kconfig.apiUrl + "controller.predictions.php?accion=GetPredictionGroupDetails", data, httpOptions )
    .map(res =>  res );
  }

  /** GET Matches from the server */
  GetListPredictions (data:any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    }
    
    return this._http.post<ListPredictions>( kconfig.apiUrl + "controller.predictions.php?accion=GetListPredictions", data, httpOptions )
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

  /** POST activation of a prediction */
  SavePredictionsGolVisitorTeam (data:any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    }
    
    return this._http.post( kconfig.apiUrl + "controller.predictions.php?accion=SavePredictionsGolVisitorTeam", data, httpOptions )
    .map(res =>  res );
  }
  /** POST activation of a prediction */
  SavePredictionsGolLocalTeam (data:any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    }
    
    return this._http.post( kconfig.apiUrl + "controller.predictions.php?accion=SavePredictionsGolLocalTeam", data, httpOptions )
    .map(res =>  res );
  }

}
