
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const ramadanDate = "22 March 2023";

function countdown() {
  const newRamadanDate = new Date(ramadanDate);
  const currentDate = new Date();

  const allSeconds = (newRamadanDate - currentDate) / 1000;

  const days = Math.floor(allSeconds / 3600 / 24);
  const hours = Math.floor(allSeconds / 3600) % 24;
  const minutes = Math.floor(allSeconds / 60) % 60;
  const seconds = Math.floor(allSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}
// function  formatTime(time){
//     return time < 10 ?(`0${time}`):time;

// }
// function display (){
//     if (allSeconds < 0){
//         clearInterval (countdown);

//         daysEl.innerHTML = days;
//         hoursEl.innerHTML = hours;
//         minutesEl.innerHTML = minutes;
//         secondsEl.innerHTML = seconds;
//     }
// }
countdown();
setInterval(countdown, 1000);
// display();
