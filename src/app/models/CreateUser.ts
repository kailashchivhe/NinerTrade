export class CreateUser {
    firstName: String
    lastName: String
    userName: String
    password: string
    
    constructor ( firstName: String,
        lastName: String,
        userName: String,
        password: string){
       this.firstName = firstName;
       this.lastName = lastName;
       this.userName = userName;
       this.password = password;
    }
}