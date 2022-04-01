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

  async addData(trade){
      this.http.post(this._baseUrl, trade).subscribe( {
        next: data => {
          return true;
        },
        error: error => {
          return false;
        }
    });
  }

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

  async deleteTrade(trade){
    this.http.delete(this._baseUrl+trade._id).subscribe( {
      next: data => {
        return true;
      },
      error: error => {
        return false;
      }
  });
  }

  async editTrade(trade){
    this.http.put(this._baseUrl+trade._id, trade).subscribe( {
      next: data => {
        return true;
      },
      error: error => {
        return false;
      }
  });
  }
}

