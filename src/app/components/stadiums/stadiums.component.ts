import { Component, OnInit } from '@angular/core';

import { StadiumsService } from './stadiums.service';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  
  public stadiums:any;

  constructor( private _stadiumsService: StadiumsService ) { }

  ngOnInit() {
    this.getStadiums();
  }

  getStadiums(){
    this._stadiumsService
    .getListStadiums()
    .subscribe(stadiums => {
      this.stadiums = stadiums;
    })
  }


}
