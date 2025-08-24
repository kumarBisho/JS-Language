
const randomNumber = function(){
    const hex = "0123456789ABCDEF"
    let colorValue = "#"
    for(let i=0;i<6;i++){
        let randNum = Math.floor(Math.random()*16)
        if(randNum==16) randNum--
        colorValue=colorValue + `${hex[randNum]}`
    }
    return colorValue
}

// console.log(randomNumber())

let colorChanger = function(){
    let colorValue = randomNumber()
    document.querySelector("body").style.backgroundColor = `${colorValue}`;
}

let intervalId=null

document.querySelector('#start').addEventListener('click', function(){
    if(!intervalId){
        intervalId = setInterval(colorChanger, 1000)
    }
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId)
    intervalId = null
})



