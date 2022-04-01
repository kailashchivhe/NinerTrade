export class CreateTrade {
    firstName: String
    lastName: String
    description: String
    type: string
    quantity: Number
    
    constructor ( firstName: String,
        lastName: String,
        description: String,
        type: string,
        quantity: Number){
       this.firstName = firstName;
       this.lastName = lastName;
       this.description = description;
       this.type = type;
       this.quantity = quantity;
    }
}