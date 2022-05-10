export class CreateTrade {
    firstName: String
    lastName: String
    description: String
    type: string
    userId: string
    
    constructor ( firstName: String,
        lastName: String,
        description: String,
        type: string,
        userId: string){
       this.firstName = firstName;
       this.lastName = lastName;
       this.description = description;
       this.type = type;
       this.userId = userId;
    }
}