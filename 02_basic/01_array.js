// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

const marval_heros = ["saktiman","ironman","spiderman"]
const dc_heros = ["superhero","flash","spiderman"]

// marval_heros.push(dc_heros)
const new_heros = marval_heros.concat(dc_heros)
// console.log(new_heros)


// spraiding the arrays
const new_spraid_arr= [...marval_heros,...dc_heros]
// console.log(new_spraid_arr)

const another_arr = [1,2,3,[4,5],6,[7,8,9,[12,34 , [456,32]]]]
const flatten_arr = another_arr.flat(Infinity)
// console.log(another_arr)
// console.log(flatten_arr)

console.log(Array.isArray(["Bisho"]))
console.log(Array.from("Bisho"))  // build array from given value
console.log(Array.from({name: "bisho"})) // can't able to convert into array. because 
// they are confused with value should use for making array
let score=500
console.log(Array.of(100,200,400,score))  // make array of all the given value
