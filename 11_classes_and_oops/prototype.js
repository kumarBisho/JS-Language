const name = "Bisho     "

// true length of string 
// console.log(name.trim().length)


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`)
    },
    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`)
    }
}

Object.prototype.bisho = function(){
    console.log(`Bisho is present in all object`)
}

// heroPower.bisho()
// myHeros.bisho()

Array.prototype.bishokumar = function(){
    console.log(`Bisho kumar is present in Array`)
}

// myHeros.bishokumar()
// heroPower.bishokumar

// Inheritance

const user = {
    name: "bisho",
    email: "123@g.com",
}

const teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "js",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingSupport,teacher)


String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    return this.trim().length
}

// console.log(name.trueLength())
console.log("kumar     yadav       ".trueLength())