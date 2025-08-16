// singleton
// Object.create()

// object literals

const mySym= Symbol("key1")

let jsUser = {
    name: "Bisho",
    "city name": "patna",
    [mySym]: "mykey1",  // symbol use inside the square bracket
    age: 23,
    email: "kumar3332@gmail.com",
    isLoggedIn: false,
    days: ["Monday","Friday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// // console.log(jsUser.city name) // this is not valid
// console.log(jsUser["city name"])

// console.log(jsUser[mySym])

// change the value in object 

// jsUser.email = "bisho@google.com"
// Object.freeze(jsUser)
// jsUser.email = "bisho@chatgpt.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log(`good morning ${this.name}`)
}
// console.log(jsUser.greeting) // it gives function refrence only as a return 
jsUser.greeting()