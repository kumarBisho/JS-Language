function setUserName(username){
    // complex db call
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("bisho", "bisho@gmail.com","2323")
console.log(chai)
