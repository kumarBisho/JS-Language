const user = {
    username: "Bisho",
    logginCount: 8,
    signedIn: true,
    getuserDetails: function(){
        console.log(`Bisho from Madhubani bihar.`)
        console.log(this.username)
    }
}

// console.log(user.username)
// user.getuserDetails()

// const promiseOne = new Promise() // here new keyword is a constructor function
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    // this.greeting()

    // return {username, loginCount, isLoggedIn}
    return this  // return is not compulsary is we are using new key word at the time of creating user
}

// it will overwrite the value 
// const userOne = User("Bisho", 12, true)
// const userTwo = User("kumar", 22, false)
// console.log(userOne)


// new -> it create a new empty object 
const userOne = new User("Bisho", 12, true)
const userTwo = new User("kumar", 22, false)
// console.log(userOne)
// console.log(userTwo)
// console.log(userOne.cunstructor)
console.log(userOne instanceof User)
console.log(userOne instanceof Object)

// stpes of creating object 
// first: new keyword create an empty object
// add value with the help of this keyword in variables
// return this instances
// print values