
class User {
    constructor(
        id,
        firstName,
        lastName,
        email,
        password,
        designation
    ){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.designation = designation
        
    }

    // Check user fields are valid or not
    isValid(){
        if(!this.firstName || !this.lastName || !this.password){
            return false
        } else {
            return true
        }
    }


}

module.exports = User