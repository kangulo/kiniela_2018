import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Routing
import {Router, ActivatedRoute, Params} from '@angular/router';

declare let $:any;
declare let swal:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  activateForm: FormGroup;
  formData: any;
  post: any;
  form:string         = '';
  name:string         = '';
  serial:string       = '';
  email:string        = '';
  phone:string        = '';
  nick_name:string    = '';
  quantity:number     = 1 ;
  success:boolean     = false;
  post_message:string = '';

  

  constructor(private fb: FormBuilder,private _registerService: RegisterService, private _router: Router){
      this.registrationForm = fb.group({
          'name':     [null,Validators.required],
          'nick_name':[null,Validators.required],
          'email':    [null,Validators.compose([Validators.required,Validators.email])],
          'phone':    [null,Validators.required],
          'quantity': [null,Validators.compose([Validators.required,Validators.min(1)])],
          'form' :    ['SendInvitationForm']
      });
  }

  ngOnInit() {

  }

  SendInvitation(post){
      
      this.name = post.name;
      this.email = post.email;
      this.nick_name = post.nick_name;
      this.phone = post.phone;
      this.quantity = post.quantity;
      this.formData = JSON.stringify(post);
      this._registerService
          .SendInvitation(this.formData)
          .subscribe(res => {
              let resp:any = res;
              if(resp.success){
                  this.success = true;
                  swal({title:"Good job!",text:resp.message,type:"success"})
                  .then((value) => {
                    swal(`Please check your email and start your predictions`);
                    this._router.navigate(['login']);
                  });
              }
              else{
                  this.ShowAlert("Aw, Snap!",resp.message,"error");
              }
      });
  }

  ShowAlert(title:string, msg:string, type:string){
      swal(title, msg , type);
  }

}
