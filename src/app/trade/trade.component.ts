import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trade } from '../models/trade';
import { TradeServiceService } from '../services/trade-service.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
  
  tradeMap : Map<string, Trade[]> = new Map<string, Trade[]>();
  
  constructor(private _tradeService: TradeServiceService, private _router: Router) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this._tradeService.getAllTrades()
      .subscribe(data => {
        for(let i= 0; i<data.length; i++ ){
          if (!this.tradeMap.has(data[i]['type'])) {
            let trade = []
            trade.push(data[i]);
            this.tradeMap.set(data[i]['type'], trade);
         } else {
            this.tradeMap.get(data[i]['type']).push(data[i]);
         }
        }
    });
              
  }

  onGetDetailsClicked(trade: Trade){
    this._tradeService.setSelectedTrade( trade);
    this._router.navigate(['/details']);
  }
}
