
// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abcd`
//     }

//     changeUsername(username){
//         this.username = username
//         return `${username}`
//     }
// }

// // create object of User class

// const chai = new User("Bisho","abc@gmail.com","124")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername("kumar"))


// behind the seen if class are not dexist.

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}

User.prototype.changeUsername = function(username){
        this.username = username
        return `${username}`
    }

const tea =new User("yadav", "r3e3232@gmail.com", "23232")
console.log(tea.encryptPassword())
console.log(tea.changeUsername("kumar"))