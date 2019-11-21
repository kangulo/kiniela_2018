import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { User } from '../../classes/User';

import { Router } from '@angular/router';
// Services
import { LoginService } from './login.service';
import { UtilityService } from '../../common/utility/utility.service';

declare let swal:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User;
  loginForm: FormGroup;
  formData: any;
  post: any;
  public serial:string       = '';
  public email:string        = '';

  constructor(private fb: FormBuilder, private _loginService: LoginService, private _router: Router, private _utilityService: UtilityService){
    this.loginForm = fb.group({
        'email':    [null,Validators.compose([Validators.required,Validators.email])],
        'serial':    [null,Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8)])],
        'form' :    ['loginForm']
    })
  }

  ngOnInit() {
  //   let isLoggedIn = this._utilityService.IsLogged();
  //   if (isLoggedIn)
  //     this._router.navigate(['predictions']);
  }

  Login(post){
        
      this.serial = post.serial;
      this.email = post.email;
      this.formData = JSON.stringify(post);
      this._loginService
        .Login(this.formData)
        .subscribe(res => {
          let resp:any = res;
          if(resp.success){
            this.user = res.data;
            this.user.serial = this.serial;
            if (typeof (Storage) !== 'undefined'){
              sessionStorage.setItem('email', this.user.email);
              sessionStorage.setItem('name', this.user.name);
              sessionStorage.setItem('serial', this.user.serial);
              sessionStorage.setItem('data', JSON.stringify(res.data));
            }
            
            this.ShowAlert("Welcome Back!" ,resp.message,"success");
            this._router.navigate(['predictions']);
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
