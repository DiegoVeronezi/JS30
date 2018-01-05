
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

let its = 0;

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const x = (seconds / 60) * 360;


  if (x === 0) {
    its += 360;
  }

  const offset = its + x;
  const secondsDegrees = offset + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;  
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;  
  
  const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


setInterval(setDate, 1000);

setDate();