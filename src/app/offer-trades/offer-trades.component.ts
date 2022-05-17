import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CreateOffer } from '../models/CreateOffer';
import { Trade } from '../models/trade';
import { TradeServiceService } from '../services/trade-service.service';

@Component({
  selector: 'app-offer-trades',
  templateUrl: './offer-trades.component.html',
  styleUrls: ['./offer-trades.component.css']
})
export class OfferTradesComponent implements OnInit {

  trade = [];
  selectedTrade: Trade;

  constructor( private _tradeService: TradeServiceService, private _router: Router, private _authService: AuthService ) { }

  ngOnInit() {
    this.fetchUserTrades();
  }

  fetchUserTrades(){
    this._tradeService.getUserTrades(this._authService.getUserId())
      .subscribe(data => {
        for(let i= 0; i<data.length; i++ ){
          this.trade.push(data[i]);
        }
    });
  }

  onItemChange(value){
    console.log(value);
    this.selectedTrade = value;
  }

  onContinueClicked(){
    let requestedTrade = this._tradeService.getSelectedTrade();
    let receiveTrade = this.selectedTrade;
    let requestUserId = this._authService.getUserId();
    let receiverUserId = requestedTrade.userId;

    let offerTrade = new CreateOffer(requestedTrade._id, requestedTrade.type, requestedTrade.description, receiveTrade._id, receiveTrade.type, receiveTrade.description, requestUserId, receiverUserId, false );
    let success = this._tradeService.requestOffer(offerTrade);
    if( success ){
      alert("success");
      this._router.navigate(['/profile']);
    }
    else{
      alert("failed");
    }
  }


}
