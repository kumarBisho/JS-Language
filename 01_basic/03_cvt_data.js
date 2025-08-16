let age = "34a"
let name = "bisho"

console.log(typeof age)
console.log(typeof(age))

let ageInNumber = Number(age)
console.log(typeof ageInNumber)
console.log(ageInNumber)

// value to Number conversion
// "34"=> 34
// "34ab"=> NaN
// null => 0
// undefined => NaN
// true => 1

let loggedin = 1

let boolLoggedin = Boolean(loggedin)
console.log(boolLoggedin)

// non zero => true
// zero=> false

let value = 345
let strValue= String(value)
console.log(typeof strValue)
console.log(strValue)