const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// update on a fix interval
setInterval(function(){
    const date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
},1000)