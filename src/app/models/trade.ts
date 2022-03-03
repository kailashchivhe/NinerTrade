export class Trade {

    id: String
    firstName: String
    lastName: String
    description: String
    userId: String
    type: string
    quantity: Number
    createdAt: Date
    
    constructor (id: String,
        firstName: String,
        lastName: String,
        description: String,
        userId: String,
        type: string,
        quantity: Number,
        createdAt: Date){
       this.id = id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.description = description;
       this.userId = userId;
       this.type = type;
       this.quantity = quantity;
       this.createdAt = createdAt;
    }
}