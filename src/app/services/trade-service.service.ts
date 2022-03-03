import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Trade } from '../models/trade';

@Injectable({
  providedIn: 'root'
})
export class TradeServiceService {
  
  private _baseUrl = "http://localhost:3000/trade/";

  trade: Trade;

  constructor(private http: HttpClient) { }

  getAllTrades(){
    return this.http.get<Trade[]>(this._baseUrl);  
  }

  getTradeById(id: string){
    return this.http.get<Trade[]>(this._baseUrl+id);  
  }

  setSelectedTrade(trade: Trade){
    this.trade = trade;
  }

  getSelectedTrade(){
    return this.trade;
  }

}

