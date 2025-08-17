
var c=400

if(true){
    let a=100
    const b=200
    // c=300
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username= "Bisho"
    function two(){
        const website="youtube.com"
        console.log(username)
    }
    // console.log(website) // this will give not defined error
    // console.log(username)
    two()
}

// one()

// console.log(addOne(5)) // this is also valid

function addOne(num){
    return num+1
}
console.log(addOne(5))

// console.log(addTwo(5)) // this will throw error because addTwo are not initialized

const addTwo = function(num){
    return num+2
}

console.log(addTwo(5))