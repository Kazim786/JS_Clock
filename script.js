const secondhand = document.querySelector('.second-hand')



function setDate(){
    const now = new Date()
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360) + 90;
    secondhand.style.transform = `rotate(${secondsDegrees}deg)`
}

setInterval(setDate, 1000);