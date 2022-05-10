import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Trade } from '../models/trade';
import { User } from '../models/user';
import { WatchList } from '../models/watchlist';
import { TradeServiceService } from '../services/trade-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUserId : string;
  currentUser : User;
  trade = [];
  offerTrades = [];
  requestedUserOffers = [];
  watchList = [];
  
  constructor(private _tradeService: TradeServiceService, private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.currentUserId = this._authService.getUserId();
    this._authService.getUserDataFromId(this.currentUserId);
    this.currentUser = this._authService.getCurrentUser();
    if( this.currentUser == null ){
      this._authService.getCurrentUser();
    }
    this.fetchUserTrades();
    this.fetchUserOfferTrades();
    this.fetchUserOffers();
    this.fetchUserWatchList();
  }

  fetchUserTrades(){
    this._tradeService.getUserTrades(this.currentUserId)
      .subscribe(data => {
        for(let i= 0; i<data.length; i++ ){
          this.trade.push(data[i]);
        }
    });
  }

  fetchUserOffers(){
    this._tradeService.getRequestOffers(this.currentUserId)
      .subscribe(data => {
        for(let i= 0; i<data.length; i++ ){
          this.requestedUserOffers.push(data[i]);
        }
    });
  }

  fetchUserOfferTrades(){
    this._tradeService.getUsersOffers(this.currentUserId)
      .subscribe(data => {
        for(let i= 0; i<data.length; i++ ){
          this.offerTrades.push(data[i]);
        }
    });
  }

  fetchUserWatchList(){
    this._tradeService.fetchUsersWatchList(this.currentUserId)
      .subscribe(data => {
        for(let i= 0; i<data.length; i++ ){
          this.watchList.push(data[i]);
        }
        this._tradeService.setUsersWatchList(data);
    });
  }

  onEditClicked(trade: Trade){
    this._tradeService.setSelectedTrade( trade );
    this._router.navigate(['/edit']);
  }

  onDeleteClicked(trade: Trade){
    if( this._tradeService.deleteTrade(this.trade) ){
      this._router.navigate(['/profile']);
      alert("Success");
    }
    else{
      alert("Could not delete");
    }
  }

  getStatus(flag){
    if(flag){
      return "Accepted";
    }
    else{
      return "Pending";
    }
  }

  onRemoveClicked(data: WatchList){
    if( this._tradeService.removeWatchList(data) ){
      this._router.navigate(['/profile']);
      alert("Success");
    }
    else{
      alert("Could not remove!");
    }
  }

  onAcceptClicked(data){
    if(this._tradeService.acceptOffer(data)){
      alert('success');
    }
    else{
      alert('failed');
    }
  }

  onCancelClicked(data){
    if(this._tradeService.decline(data)){
      alert('success');
    }
    else{
      alert('failed');
    }
  }
}
