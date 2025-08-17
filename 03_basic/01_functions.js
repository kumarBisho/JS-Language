function my_name(){
    console.log("Bisho")
    console.log("Kumar")
}

// my_name()

// function addNumber(num1, num2){
//     console.log(num1+num2)
// }

function addNumber(num1, num2){
    return num1 + num2
}

const result = addNumber(4,8)
// console.log("result: ", result)

function loginUserMassage(userName){
    if(!userName){
        return `Please enter username.`
    }
    return `${userName} is logged in successfully.`
}
let massage = loginUserMassage("Bisho")
// console.log(massage)

// function calculateCartPrice(...num1){
//     let res=0
//     for(let it of num1){
//         res+=it
//     }
//     return res
// }

function calculateCartPrice(val1,...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,400))

const user={
    username: "Bisho",
    price: 3343,
}

function handleObject(anyUser){
    console.log(`username is ${anyUser.username} and price is ${anyUser.price}`)
}
// handleObject(user)

// handleObject({
//     username: "kumar",
//     price: 423,
// })

const myNewArray =[34,56,78,65]

function returnSecondValue(arr){
    return arr[1]
}
console.log(returnSecondValue(myNewArray))