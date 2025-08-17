// const user={
//     username: "Bisho",
//     price: 4432,
//     message: function(){
//         console.log(`${this.username} , weocome to this code`)
//         // console.log(this)
//     }
// }

// console.log(user)
// user.message()
// user.username="kumar"
// user.message()
// console.log(this)


// function chai(){
//     console.log(this)
// }
// chai()

// function chai(){
//     let username= "Bisho"
//     console.log(this)  // it prints undefined 
// }
// chai()

// const chai = function(){
//     let username= "Bisho"
//     console.log(this.username) // it prints undefined 
// }
// chai()

// const chai = () =>{
//     console.log("Bisho")
//     console.log(this)
// }

// chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2;
// }

// implicit return 
// const addTwo = (num1, num2) =>  num1+num2

// const addTwo = (num1, num2) =>  (num1+num2)

// const addTwo = (num1, num2) =>  ({username: "bisho"})

// console.log(addTwo(34,56))


// imediatelly invoked function expression (iife)


(function chaiAurCode(){
    console.log("bisho")
})();

((name) =>{
    console.log(`${name} kumar`)
})("bisho")
