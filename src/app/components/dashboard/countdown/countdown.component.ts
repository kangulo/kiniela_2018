import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable"

declare let $:any;

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})

export class CountdownComponent implements OnInit{

  constructor() { }

  ngOnInit() {

  }

}
