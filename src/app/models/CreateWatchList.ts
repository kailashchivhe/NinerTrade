export class CreateWatchList {

    userId: string
    tradeId: string
    tradeTitle: string
    
    constructor (userId: string,
        tradeId: string,
        tradeTitle: string){
       this.userId = userId;
       this.tradeId = tradeId;
       this.tradeTitle = tradeTitle;
    }
}