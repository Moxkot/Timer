'use strict'

let titleDate = document.querySelector('#title-date');
let dateTimer = document.querySelector('#date');
let btnStart = document.querySelector('#btn');
let btnReset = document.querySelector('#btn-reset');
let nameTimer = document.querySelector('h1');
let startData = document.querySelector('.input');
let timerData = document.querySelector('.output');
let h2 = document.querySelector('.complete');
let countdownDate = '';
let diff = '';
let numbers = document.querySelector('.numbers');
let timerId = '';


function countdown() {

  countdownDate = new Date(dateTimer.value).getTime();  

  
  nameTimer.textContent = titleDate.value;  
  localStorage.setItem('name', titleDate.value);
  localStorage.setItem('date', countdownDate);

  if(!countdownDate) {
    alert('Пожалуйста, введите дату');
  } else {
    return startTimer();
  };

};

 function local() {
  let dateCount = localStorage.getItem('date');
  let nameCount = localStorage.getItem('name');

  if(!(dateCount && nameCount)) {
   return;
  };

  nameTimer.textContent = nameCount;
  countdownDate = dateCount;
  startTimer();
};


function checkDate() {
  let timeZone = new Date().getTimezoneOffset() * 60000;
  console.log(timeZone);
  let dateNow = new Date().getTime() - timeZone;
  diff = countdownDate - dateNow;
  if(diff <= 0) {
    timerData.classList.add('hide');
    h2.classList.remove('hide');
    h2.textContent = `${titleDate.value} завершился ${dateTimer.value}`;
    clearInterval(timerId);
    return;
  };
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff/(1000*60*60))%24);
  let minutes = Math.floor((diff/(1000*60))%60);
  let seconds = Math.floor((diff/1000)%60);
  numbers.textContent = `${addZero(days)}:${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

}

function startTimer() {
  btnStart.classList.add('hide');
  btnReset.classList.remove('hide');
  startData.classList.add('hide');
  timerData.classList.remove('hide');


 
   checkDate();
 
  timerId = setInterval(checkDate, 1000);
};

function reset() {
  btnStart.classList.remove('hide');
  btnReset.classList.add('hide');
  startData.classList.remove('hide');
  timerData.classList.add('hide');
  nameTimer.textContent = 'Создать новый таймер обратного отсчета';
  titleDate.value = '';
  dateTimer.value = '';
  localStorage.removeItem('date');
  localStorage.removeItem('name');
}

function addZero(num) {
  return num < 10 ? '0' + num : num;
};

btnStart.addEventListener('click', countdown);
btnReset.addEventListener('click', reset);
local();