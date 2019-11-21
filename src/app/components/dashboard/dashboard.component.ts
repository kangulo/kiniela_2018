import { Component, OnInit } from '@angular/core';
import { DashboardService } from "./dashboard.service";
import { PredictionsService } from "../predictions/predictions.service";

import { ListPredictions } from '../../classes/ListPredictions';
import { Prediction } from '../../classes/Prediction';


import 'datatables.net'
declare let swal:any;
declare let $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public leaderboard: any;

  predictions: ListPredictions;
  predictionDetails: Prediction;
  public serial:string       = '';
  public nickname:string       = '';

  hasAttachedListener:boolean=false;

  public tableWidget: any;

  public selectedName: string="";


  constructor(private _dashboardService: DashboardService, private _predictionsService: PredictionsService) { }

  ngOnInit() {
    this.getLeaderboard();
    
  }

  getPredictionDetails(serial:any,nickname:string){
    this.serial = serial ;
    this.nickname = nickname;
    let data = {
      'serial':serial
    };
    // Get Predictions Data
    this._predictionsService
    .GetPredictionDetails(data)
    .subscribe(getPredictionDetails => {
      this.predictionDetails = getPredictionDetails.data;
    });
  
    
    $('#tab-2').addClass('animated slideInRight');
    $('a[href="#tab-2"]').tab('show');
  }

  getLeaderboard(){
    this._dashboardService
    .getLeaderboard()
    .subscribe(leaderboard => {
      this.leaderboard = leaderboard;
      //this.initDatatable();
    });
  }

  ngAfterViewInit() {
  }


  private initDatatable(): void {
    let table_el: any = $('#example');
    this.tableWidget = table_el.DataTable({
      select: true,
      columnDefs: [{
        targets: -1,
        data: this.leaderboard,
        defaultContent: '<button class="ver-button btn btn-info waves-effect" (click)="getPredictionDetails(serial_id,nickname)">Ver &nbsp;<i class="zmdi zmdi-eye"></i></button>',
      }],
      data: this.leaderboard,
      columns: [
          { title: '#', data:  'row_id' },
          { title: 'Nickname', data: 'nickname' },
          { title: 'Points Matches', data: 'points_matches' },
          { title: 'Points Groups', data: 'points_groups' },
          { title: '' },
      ],
    });
 
 //   $('#example')
 //     .removeClass('display')
 //     .addClass('table table-striped table-bordered')
  }

  private reInitDatatable(): void {
    if (this.tableWidget) {
      this.tableWidget.destroy();
      this.tableWidget=null
    }
    setTimeout(() => this.initDatatable(),0)
  }


  public selectRow(index: number, row:any) {
    this.selectedName = "row#" + index + " " + row.name
  }

  ShowAlert(title:string, msg:string, type:string){
      swal({
         title: title,
         text: msg , 
         type: type
      });
  }

}
