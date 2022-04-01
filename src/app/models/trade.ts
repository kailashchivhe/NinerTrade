export class Trade {

    _id: string
    firstName: String
    lastName: String
    description: String
    type: string
    quantity: Number
    
    constructor (_id: string,
        firstName: String,
        lastName: String,
        description: String,
        type: string,
        quantity: Number){
       this._id = _id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.description = description;
       this.type = type;
       this.quantity = quantity;
    }
}