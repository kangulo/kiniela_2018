import { Component, OnInit } from '@angular/core';

declare let swal:any;
declare let $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

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
