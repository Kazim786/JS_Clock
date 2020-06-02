const secondhand = document.querySelector('.second-hand')

//video paused at 7:47

function setDate(){
    const now = new Date()
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360) + 90;
    secondhand.style.transform = `rotate(${secondsDegrees}deg)`
}

setInterval(setDate, 1000);