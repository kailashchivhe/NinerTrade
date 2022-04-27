import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Trade } from '../models/trade';
import { User } from '../models/user';
import { TradeServiceService } from '../services/trade-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUserId : string;
  trade = [];
  
  constructor(private _tradeService: TradeServiceService, private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.currentUserId = this._authService.getUserId();
    this.fetchUserTrades();
  }

  fetchUserTrades(){
    this._tradeService.getUserTrades(this.currentUserId)
      .subscribe(data => {
        for(let i= 0; i<data.length; i++ ){
          this.trade.push(data[i]);
        }
    });
  }

  onEditClicked(trade: Trade){
    this._tradeService.setSelectedTrade( trade );
    this._router.navigate(['/edit']);
  }

  onDeleteClicked(trade: Trade){
    if( this._tradeService.deleteTrade(this.trade) ){
      this._router.navigate(['/profile']);
    }
    else{
      alert("Could not delete");
    }
  }
}
