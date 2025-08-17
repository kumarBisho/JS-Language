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
// jsUser.greeting()


const tinderUser = new Object()
tinderUser.id = 12344
tinderUser.name = "bisho"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

let createUser = {
    email: "some@gmail.com",
    username: {
        fullname:{
            first_name: "bisho",
            lase_name: "kumar",
        }
    }
}

// console.log(createUser.username.fullname.lase_name)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} // it gives nested object

// const obj4 = Object.assign({}, obj1, obj2, obj3) // here i have taken one empty object and assign all object into that

const obj4 = {...obj1, ...obj2, ...obj3}  // spraid operator are used here
// console.log(obj4)
// console.log(obj1 === obj4)

const users = [
    {
        id: 1,
        email:"a@g"
    },
    {
        id: 1,
        email:"b@g"
    },
    {
        id: 1,
        email:"c@g"
    },
    {
        id: 1,
        email:"d@g"
    },
]

// console.log(users[1].email)

// console.log(Object.keys(tinderUser))  // this return all keys in an array
// console.log(Object.values(tinderUser)) // this return all values in an array
// console.log(Object.entries(tinderUser))  // it will be array of array

// console.log(tinderUser.hasOwnProperty("full_name"))


const course = {
    courseName: "js tuitorial",
    price: 543,
    courseInstructor: "Bisho kumar",
}

// const {courseInstructor} = course  // this is also valid
// console.log(courseInstructor)

const {courseInstructor: instructor} = course  // this is called destructure of object
console.log(instructor)