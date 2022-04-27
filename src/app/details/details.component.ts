import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Trade } from '../models/trade';
import { TradeServiceService } from '../services/trade-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  trade: Trade;
  constructor( private _tradeService: TradeServiceService, private _router: Router, private _authService: AuthService ) { }

  ngOnInit() {
    if( this._tradeService.getSelectedTrade() != null )
    {
      this.trade = this._tradeService.getSelectedTrade();
    }
  }

  onEditClicked(){
      this._router.navigate(['edit']);
  }

  onDeleteClicked(){
    if( this._tradeService.deleteTrade(this.trade) ){
      this._router.navigate(['/trade']);
    }
    else{
      window.alert("Could not delete");
    }
  }

  loggedIn(){
    let isLogged = this._authService.loggedIn();
    if(isLogged){
      return true;
    }
    else{
      return false;
    }
  }

  isOwned(){
    let id = localStorage.getItem("userId");
    if( this.trade.userId === id ){
      return true;
    }
    else{
      return false;
    }
  }
}
