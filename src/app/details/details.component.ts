import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CreateWatchList } from '../models/CreateWatchList';
import { Trade } from '../models/trade';
import { TradeServiceService } from '../services/trade-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  trade: Trade;
  watchListButton: string;
  
  constructor( private _tradeService: TradeServiceService, private _router: Router, private _authService: AuthService ) { }

  ngOnInit() {
    if( this._tradeService.getSelectedTrade() != null )
    {
      this.trade = this._tradeService.getSelectedTrade();
    }
    let userId = localStorage.getItem("userId");
    if(!this._tradeService.isAddedtoWatchList(this.trade, userId ))
    {
      this.watchListButton = "Add to Watch List";
    }
    else{
      this.watchListButton = "Remove from Watch List";
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

  onWatchClicked(){
    if( this.loggedIn()){
      if(this.isOwned()){
        alert("You are the owner of this trade");
      }
      else{
        let createWatchList = new CreateWatchList(localStorage.getItem("userId"), this.trade._id, this.trade.type );
        if( this._tradeService.addToWatchList(createWatchList)){
          this.watchListButton = "Remove From Watch List";
        }
        else{
          //TODO: watchList
        }
      }
    }
    else{
      this._router.navigate(['/login']);
    }
  }

  onTradeClicked(){
    if( this.loggedIn()){
      if(!this.isOwned()){
        this._tradeService.setOfferTrade(this.trade);
        this._router.navigate(['/offerTrades']);
      }
      else{
        alert("You own this trade!");
      }
    }
    else{
      this._router.navigate(['/login']);
    }
  }
}
