import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './admin.service';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Routing
import {Router, ActivatedRoute, Params} from '@angular/router';

declare let $:any;
declare let swal:any;

@Component({
  selector: 'app-adminarea',
  templateUrl: './adminarea.component.html',
  styleUrls: ['./adminarea.component.css']
})
export class AdminareaComponent implements OnInit {
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
    quantity:number     = 0 ;
    success:boolean     = false;
    post_message:string = '';

    

    constructor(private fb: FormBuilder,private _adminService: AdminService, private _routing: ActivatedRoute){
        this.registrationForm = fb.group({
            'name':     [null,Validators.required],
            'nick_name':[null,Validators.required],
            'email':    [null,Validators.compose([Validators.required,Validators.email])],
            'phone':    [null,Validators.required],
            'quantity': [null,Validators.required],
            'form' :    ['SendInvitationForm']
        });
        this.activateForm = fb.group({
            'email':    [null,Validators.compose([Validators.required,Validators.email])],
            'serial':    [null,Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8)])],
            'form' :    ['ActivationForm']
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
        this._adminService
            .SendInvitation(this.formData)
            .subscribe(res => {
                let resp:any = res;
                if(resp.success){
                    this.success = true;
                    this.ShowAlert("Good job!",resp.message,"success");
                }
                else{
                    this.ShowAlert("Aw, Snap!",resp.message,"error");
                }
        });
    }

    ActivatePredictionByForm(post){

        this.serial = post.serial;
        this.email = post.email;
        this.formData = JSON.stringify(post);
    
        this._adminService
        .ActivatePrediction(this.formData)
        .subscribe(res => {
          let resp:any = res;
          if(resp.success){
              this.success = true;
              this.ShowAlert("Good job!",resp.message,"success");
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
