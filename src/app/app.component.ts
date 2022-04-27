import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninertrade';
  constructor(private _authService: AuthService){}

  loggedIn(){
    let isLogged = this._authService.loggedIn();
    if(isLogged){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this._authService.logoutUser();
  }
}
