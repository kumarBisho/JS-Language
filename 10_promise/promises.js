// const promiseOne = new Promise(function(resolve, reject){
//     // do an asynchronous task
//     // DB calls, cryptography, network calls

//     setTimeout(function(){
//         console.log("async task compelete")
//         resolve()
//     }, 2000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task completed 2")
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("promise consumed 2")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "bisho", email: "kumarbisho02@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "bisho", email: "kumarbisho02@gmail.com"})
//         }else{
//             reject("There are error occurs.")
//         }
//     }, 1000)
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Promises are either resolved or rejected")
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Javascript", password: "12345"})
//         }else{
//             reject("There are some error in js.")
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()
//         console.log(typeof data)
//         console.log(data) 
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.json())
.then((data)=>console.log(data))
.catch((error)=> console.log(error))
.finally(()=>console.log("fetching completed"))