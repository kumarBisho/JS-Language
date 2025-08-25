const promiseOne = new Promise(function(resolve, reject){
    // do an asynchronous task
    // DB calls, cryptography, network calls

    setTimeout(function(){
        console.log("async task compelete")
        resolve()
    }, 2000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})