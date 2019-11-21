import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

declare let swal:any;
declare let $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'app';
  constructor(private _router: Router) { 

  }

  ngOnInit() {
  }

  logout(event){
    swal({title:"Are you sure?",text:"Do you want to close your session?",type:"warning",showCancelButton:!0,confirmButtonText:"Logout"})
    .then(function(){sessionStorage.clear(),window.location.reload(),swal("Done!","localStorage is cleared","success")});
    
    //this.ShowAlert("Are you sure?","Do you want to close your session","warning");
    //this._router.navigate(['login']);
  }

  ShowAlert(title:string, msg:string, type:string){
      swal(title, msg , type);
  }
}
