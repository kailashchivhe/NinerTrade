export class CreateTrade {
    firstName: String
    lastName: String
    description: String
    type: string
    quantity: Number
    userId: string
    
    constructor ( firstName: String,
        lastName: String,
        description: String,
        type: string,
        quantity: Number,
        userId: string){
       this.firstName = firstName;
       this.lastName = lastName;
       this.description = description;
       this.type = type;
       this.quantity = quantity;
       this.userId = userId;
    }
}