const coding = ["c", "cpp", "python", "java", "javascript", "swift"]

// for(const item of coding){
//     console.log(item)
// }

// it gives index
// for(const item in coding){
//     console.log(`index are ${item} and value are ${coding[item]}`)
// }


// const languages = coding.forEach( (value) =>{
//     console.log(value)
// })

// console.log(languages)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const values = myNums.filter( (nums) => nums>4)

// const values = myNums.filter( (nums) => {
//     return nums > 4
// })

// const values = myNums.filter( (nums) => (nums>4))
// console.log(values)

// const newNums = []

// myNums.forEach( (nums) => {
//     if(nums>4) newNums.push(nums)
// })

// console.log(newNums)

// const addedValue = myNums.map( (val) => val+10)

// this is called chaining
// const addedValue = myNums.map( (val) => val*10).map( (val) => val/2).filter( (val) => val>20)

// console.log(addedValue)

// reduce method

const initialValue =10

// let finalValue = myNums.reduce(function (accumulator, currentVal){
//     return accumulator + currentVal
// }, 0 )

// let finalValue = myNums.reduce( (accumulator, currentVal) => accumulator - currentVal, initialValue)
// console.log(finalValue)

const shoppingCart = [
    {
        courseName : "js",
        price: 3223
    },
    {
        courseName : "python",
        price: 223
    },
    {
        courseName : "java",
        price: 2233
    },
    {
        courseName : "Data Science",
        price: 12233
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(totalPrice)