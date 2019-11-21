import { Component, OnInit } from '@angular/core';

import { GroupsService } from "./groups.service";
import { GroupsPipe } from "../../common/filters/groups.filter";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  public teams: any;
  public groups: any;

  constructor(private _groupsService: GroupsService) { }

  ngOnInit() {
    this.getGroups();
    this.getTeams();
  }

  getTeams(){
    this._groupsService
    .getTeams()
    .subscribe(teams => {
      this.teams = teams;
    })
  }

  getGroups(){
    this._groupsService
    .getGroups()
    .subscribe(groups => {
      this.groups = groups;
    })
  }

}
