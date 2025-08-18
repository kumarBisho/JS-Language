// falsy value 

// false, 0, -0, BigInt 0n, null, undefined, "",NaN these all are treated as falsy value 
// other than this all are true value 
// truthy value
// "false", "0", " ", [], {}, function(){}


// nullish coelescion operation

// let val=5 ?? 10 // output 5
// let val=null ?? 10 // output 10
// let val=undefined ?? 10 // output 10
// let val=null ?? 5 ?? 10 // output 5
let val=null ?? undefined ?? 10 // output 10

console.log(val)
