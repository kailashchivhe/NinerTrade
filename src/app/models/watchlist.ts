export class WatchList {
    _id: string
    userId: string
    tradeId: string
    tradeTitle: string
    
    constructor (_id: string,
        userId: string,
        tradeId: string,
        tradeTitle: string){
       this._id = _id;
       this.userId = userId;
       this.tradeId = tradeId;
       this.tradeTitle = tradeTitle;
    }
}