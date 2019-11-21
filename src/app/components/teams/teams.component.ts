import { Component, OnInit } from '@angular/core';
import { Teams } from './teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Teams[];

  constructor() { }

  ngOnInit() {
  }

}
