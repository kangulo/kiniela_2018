import { Component, OnInit } from '@angular/core';

import { MatchesService } from './matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any;
  totalPlayers:any;

  constructor( private _matchesService: MatchesService ) { }

  ngOnInit() {
    this.getMatches();
    this.getTotalPlayers();
  }

  getMatches(){
    this._matchesService
    .getListMatches()
    .subscribe(matches => {
      this.matches = matches;
    })
  }

  getTotalPlayers(){
    this._matchesService
    .getTotalPlayers()
    .subscribe((resp:any) => {
      this.totalPlayers = resp.total;
    })
  }

}
