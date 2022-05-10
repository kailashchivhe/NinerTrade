import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Trade } from '../models/trade';
import { offer } from '../models/offer';
import { CreateOffer } from '../models/CreateOffer';
import { CreateWatchList } from '../models/CreateWatchList';
import { WatchList } from '../models/watchlist';

@Injectable({
  providedIn: 'root'
})
export class TradeServiceService {
  
  private _baseUrl = "http://localhost:3000/trade/";
  private _tradeUrl = "http://localhost:3000/user/trades/";
  private _offerUrl = "http://localhost:3000/offer/";
  private _watchUrl = "http://localhost:3000/watch/";

  trade: Trade;
  offerTrade: Trade;
  watchList: WatchList[];

  constructor(private http: HttpClient) { }
  
  setOfferTrade(tradeData: Trade){
    this.offerTrade = tradeData
  }

  getOfferTrade(){
    return this.offerTrade;
  }

  getAllOffers(id: string){
    return this.http.get<offer[]>(this._offerUrl+id); 
  }

  getRequestOffers(id: string){
    return this.http.get<offer[]>(this._offerUrl+"request/"+id); 
  }

  getUsersOffers(id: string){
    return this.http.get<offer[]>(this._offerUrl+id); 
  }

  setUsersWatchList(watchList: WatchList[]){
    this.watchList = watchList;
  }

  getUsersWatchList(){
    return this.watchList;
  }
  getAllTrades(){
    return this.http.get<Trade[]>(this._baseUrl);  
  }

  getUserTrades(id: string){
    return this.http.get<Trade[]>(this._tradeUrl+id);
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

  isAddedtoWatchList(trade: Trade, userId: string){
    if(this.watchList != null )
    {
      for(var i=0;i<this.watchList.length;i++ ){
        if(this.watchList[i].tradeId === trade._id && this.watchList[i].userId == userId ){
          return true;
        }
      }
    }
    return false;
  }

  fetchUsersWatchList(id: string){
    return this.http.get<WatchList[]>(this._watchUrl+id); 
  }

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

  async requestOffer(offer: CreateOffer){
    this.http.post(this._offerUrl, offer).subscribe( {
      next: data => {
        return true;
      },
      error: error => {
        return false;
      }
    });
  }

  async addToWatchList(watchlist: CreateWatchList){
    this.http.post(this._watchUrl, watchlist).subscribe( {
      next: data => {
        return true;
      },
      error: error => {
        return false;
      }
    });
  }

  async removeWatchList(watchlist: WatchList){
    this.http.post(this._watchUrl+"remove", watchlist).subscribe( {
      next: data => {
        return true;
      },
      error: error => {
        return false;
      }
    });
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

  async acceptOffer(offer: offer){
    this.http.post(this._offerUrl+"accept", offer).subscribe( {
      next: data => {
        return true;
      },
      error: error => {
        return false;
      }
    });
  }

  async decline(offer: offer){
    this.http.post(this._offerUrl+"decline", offer).subscribe( {
      next: data => {
        return true;
      },
      error: error => {
        return false;
      }
    });
  }
  
}

