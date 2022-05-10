export class Trade {

    _id: string
    firstName: string
    lastName: string
    description: string
    type: string
    userId: string
    
    constructor (_id: string,
        firstName: string,
        lastName: string,
        description: string,
        type: string,
        quantity: Number,
        userId: string){
       this._id = _id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.description = description;
       this.type = type;
       this.userId = userId;
    }
}