import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  loginForm: FormGroup;

  constructor( private _authService: AuthService,
    private _router: Router ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': new FormControl("",Validators.email),
      'password': new FormControl("",Validators.required),
    });
  }

  loginUser () 
  {
    this.loginUserData = {userName: this.loginForm.get('userName').value.trim(), password: this.loginForm.get('password').value.trim()};
    if( this._authService.loginUser(this.loginUserData) ){
        alert("Login success");
    }
    else{
      alert("Could not login");
    } 
  }

}
