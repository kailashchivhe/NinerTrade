export class User {
    firstName: String
    lastName: String
    userName: String
    password: string
    _id: string
    
    constructor ( firstName: String,
        lastName: String,
        userName: String,
        password: string,
        _id: string){
       this.firstName = firstName;
       this.lastName = lastName;
       this.userName = userName;
       this.password = password;
       this._id = _id;
    }
}