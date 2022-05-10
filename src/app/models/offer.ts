export class offer {

    _id: string
    requestTradeId: string
    requestTradeTitle: string
    requestTradeDescription: string
    receiverTradeId: string
    receiverTradeTitle: string
    receiverTradeDescription: string
    requestUserId: string
    receiverUserId: string
    status: boolean
    
    constructor (_id: string,
        requestTradeId: string,
        requestTradeTitle: string,
        requestTradeDescription: string,
        receiverTradeId: string,
        receiverTradeTitle: string,
        receiverTradeDescription: string,
        requestUserId: string,
        receiverUserId: string,
        status: boolean){
       this._id = _id;
       this.requestTradeId = requestTradeId;
       this.requestTradeTitle = requestTradeTitle;
       this.requestTradeDescription = requestTradeDescription;
       this.receiverTradeId = receiverTradeId;
       this.receiverTradeTitle = receiverTradeTitle;
       this.receiverTradeDescription = receiverTradeDescription;
       this.requestUserId = requestUserId;
       this.receiverUserId = receiverUserId;
       this.status = status;
    }
}