
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const dayNight = document.querySelector('.ampm');
const hands = document.querySelector('.hand')

function setDate(){
   // setting the seconds 
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsToDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`

   // setting the minutes
   const minutes = now.getMinutes()
   const minutesToDegrees = ((minutes / 60) * 360) + 90
   minHand.style.transform = `rotate(${minutesToDegrees}deg)`

   // setting the hours
   let hour = now.getHours()
   let amPm = hour >= 12 ? 'pm' : 'am'
   hour = hour % 12
   hour = hour ? hour : 12
   const hoursToDegrees = ((hour / 12) * 360) + 90
   hourHand.style.transform = `rotate(${hoursToDegrees}deg)`

   //extra fun
   dayNight.innerHTML = amPm


   console.log(amPm)
   console.log(hour)
   console.log(minutes)
   console.log(seconds)
};



setInterval(setDate, 1000)