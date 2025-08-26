function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 5

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

// in Js Array, String, function all are object 


function createuser(username, score){
    this.username = username
    this.score = score
}

createuser.prototype.increament = function(){
    this.score++
}

createuser.prototype.printMe = function(){
    console.log(`username is ${this.username}`)
    console.log(`score is ${this.score}`);
}

const chai = new createuser("chai", 25)
const tea = new createuser("tea", 250)

chai.increament()
tea.increament()

chai.printMe()
tea.printMe()
