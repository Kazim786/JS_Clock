const secondhand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

//video paused at 7:47

function setDate(){
    const now = new Date()
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360) + 90;
    secondhand.style.transform = `rotate(${secondDegrees}deg)`

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes/60) * 360) + 90
    minHand.style.transform = `rotate(${minuteDegrees}deg)`

    const hours = now.getHours();
    const hourDegrees = ((hours/24) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(setDate, 1000);