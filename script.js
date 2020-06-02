const secondhand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

//video paused at 7:47

function setDate(){
    const now = new Date()
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360) + 90;
    secondhand.style.transform = `rotate(${secondDegrees}deg)` //dom manipulation

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes/60) * 360) + 90
    minHand.style.transform = `rotate(${minuteDegrees}deg)` //dom manipulation

    const hours = now.getHours();
    const hourDegrees = ((hours/24) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)` //dom manipulation

}
setInterval(setDate, 1000);


//Trying to integrate an alarm system 

// function time(){
//     const theHour = now.getHours();
//     const theMinutes = now.getMinutes();
//     const theSeconds = now.getSeconds();
//     time = {hour:theHour, minutes:theMinutes, seconds:theSeconds}
//         return time
//     }

// console.log(time());

// function alarm(){
//     if(now.getTime() == time){
//         alert("ITS TIME");
//     }
// }
// alarm();