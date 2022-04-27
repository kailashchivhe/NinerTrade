import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { UserToken } from './models/UserToken';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService 
{

  private _loginUrl = "http://localhost:3000/user";

  private currentUser:User;

  constructor(private http: HttpClient,
              private _router: Router) { }

  async loginUser(user) {
    this.http.post<UserToken>(this._loginUrl+ "/login", user).subscribe( {
      next: data => {
        localStorage.setItem('token', data.token );
        if( this.getUserData(user))
        {
          this._router.navigate(['/profile'])
          return true;
        }
        else{
          return false;
        }
      },
      error: error => {
        console.log(error);
        return false;
      }
    });
  }

  getUserId(){
    return localStorage.getItem('userId');
  }

  setUserId(id){
    localStorage.setItem('userId', id);
  }
  getCurrentUser(){
    return this.currentUser;
  }

  async getUserData(user){
    this.http.post<User>(this._loginUrl+ "/info", user).subscribe( {
      next: data => {
        this.currentUser = data
        localStorage.setItem('userId', data._id )
        return true;
      },
      error: error => {
        console.log(error);
        return false;
      }
    });
  }
  async signUp(user){
    this.http.post(this._loginUrl+ "/signup", user).subscribe( {
      next: data => {
        console.log(data);
        return true;
      },
      error: error => {
        console.log(error);
        return false;
      }
  });
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    this._router.navigate(['/home'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
