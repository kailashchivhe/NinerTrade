import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CreateUser } from '../models/CreateUser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: CreateUser;
  userForm: FormGroup;

  constructor(private _authService: AuthService, private router: Router) { 
  }

  ngOnInit() {
    this.user = new CreateUser("","","","");
    this.userForm = new FormGroup({
      'firstName': new FormControl("",Validators.required),
      'lastName': new FormControl("",Validators.required),
      'userName': new FormControl("",Validators.email),
      'password': new FormControl("",Validators.required),
    });
  }

  onCreateClicked(){
    this.user.firstName = this.userForm.get('firstName').value;
    this.user.lastName = this.userForm.get('lastName').value;
    this.user.userName = this.userForm.get('userName').value;
    this.user.password = this.userForm.get('password').value;
    if( this._authService.signUp(this.user) ){
      this.router.navigate(['/login']);
    }
    else{
      window.alert("Could not Edit");
    }
  }

}
