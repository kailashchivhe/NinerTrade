export class Trade {

    _id: string
    firstName: String
    lastName: String
    description: String
    type: string
    quantity: Number
    userId: string
    
    constructor (_id: string,
        firstName: String,
        lastName: String,
        description: String,
        type: string,
        quantity: Number,
        userId: string){
       this._id = _id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.description = description;
       this.type = type;
       this.quantity = quantity;
       this.userId = userId;
    }
}