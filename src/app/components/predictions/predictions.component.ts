import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { User } from '../../classes/User';
import { ListPredictions } from '../../classes/ListPredictions';
import { Prediction } from '../../classes/Prediction';

// Services
import { PredictionsService } from './predictions.service';
import { UtilityService } from '../../common/utility/utility.service';
import { Router } from '@angular/router';

import { PredictiongroupsComponent } from './predictiongroups/predictiongroups.component'

import * as jsPDF from 'jspdf'

declare let swal:any;
declare let $:any;

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit {
  today = Date.now();
  closeDate = '20180614T10:30:00';
  predictions: ListPredictions;
  predictionDetails: Prediction;
  
  formData: any;
  post: any;
  serial:string       = '';
  private gol_local:number;
  private gol_visitor:number;
  private match_id:number;
  private email:string        = '';
  success:boolean     = false;
  post_message:string = '';

  constructor(private fb: FormBuilder, private _router: Router, private _predictionsService: PredictionsService, private _utilityService: UtilityService)
  {}

  ngOnInit() {
    this.getListPredictions(sessionStorage.getItem('email'));
  }

  getPredictionDetails(serial:any){
    this.serial = serial;
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
    let pg = new PredictiongroupsComponent(serial);
    pg.getGroupsBySerial(this.serial);
  }

  ActivatePredictionByUser(serial:any){
    //return;
    let data = {
      'email':sessionStorage.getItem('email'),
      'serial':serial
    };

    this._predictionsService
    .ActivatePrediction(data)
    .subscribe(res => {
      let resp:any = res;
      if(resp.success){
          this.success = true;
          this.ShowAlert("Good job!",resp.message,"success");
          this.getPredictionDetails(serial);
      }
      else{
          this.ShowAlert("Aw, Snap!",resp.message,"error");
      }
    });
  }

  getListPredictions(user_email:string = ""){

    let data = {
      'email':user_email
    };

    this._predictionsService
    .GetListPredictions(data)
    .subscribe(
      getListPredictions => {
      this.predictions = getListPredictions.data;
    });
  }
  
  SavePredictionsGolLocalTeam(serial:string, match_id:number, gol: number){
    if (serial !== undefined && match_id > 0 && gol >= 0){
      let data = {
        'serial':serial,
        'match_id':match_id,
        'gol':gol,
      };
      this._predictionsService
      .SavePredictionsGolLocalTeam(data)
      .subscribe(
        SavePredictionsGolLocalTeam => {
          let resp:any = SavePredictionsGolLocalTeam;
          console.log(resp.success);
          if(!resp.success){              
              this.ShowAlert("Aw, Snap!",resp.message,"error");
              return;
          }
      });
    }
  }
  
  SavePredictionsGolVisitorTeam(serial:string, match_id:number, gol:number){
    if (serial !== undefined && match_id > 0 && gol >= 0){
      let data = {
        'serial':serial,
        'match_id':match_id,
        'gol':gol,
      };
      this._predictionsService
      .SavePredictionsGolVisitorTeam(data)
      .subscribe(
        SavePredictionsGolVisitorTeam => {
          let resp:any = SavePredictionsGolVisitorTeam;
          console.log(resp.success);
          if(!resp.success){              
              this.ShowAlert("Aw, Snap!",resp.message,"error");
              return;
          }
      });
    }
  }

  ShowAlert(title:string, msg:string, type:string){
      swal(title, msg , type);
  }

  print(): void {
    let printContents, popupWin;
    printContents = $('#print-section').text();
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" type="text/css" href="style.css" />
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}

download() {
  var doc = new jsPDF();
  // We'll make our own renderer to skip this editor
  var specialElementHandlers = {
    '#editor': function (element, renderer) {
          return true;
      }
  };
  var innerContents = document.getElementById('print-section').innerHTML;
  console.log(innerContents);
  doc.fromHTML(innerContents, 15, 15, {
    'width': 170, 
    'elementHandlers': specialElementHandlers
  });
  
  // doc.text(20, 20, 'Hello world!');
  // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
  // doc.addPage();
  // doc.text(20, 20, 'Do you like that?');

  // Save the PDF
  doc.save('Test.pdf');
}

}
