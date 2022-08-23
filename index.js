'use strict'

let titleDate = document.querySelector('#title-date');
let dateTimer = document.querySelector('#date');
let btnStart = document.querySelector('#btn');
let btnReset = document.querySelector('#btn-reset');
let nameTimer = document.querySelector('h1');
let startData = document.querySelector('.input');
let timerData = document.querySelector('.output');
let h2 = document.querySelector('.complete');
let countdownDate;
let diff;
let numbers = document.querySelector('.numbers');


function countdown() {
  countdownDate = new Date(dateTimer.value);
  let dateNow = Date.now();
  diff = countdownDate - dateNow;
  nameTimer.textContent = titleDate.value;  
  
  if(!countdownDate) {
    alert('Пожалуйста, введите дату');
  } else {
    return startTimer();
  };
};


function checkDate() {
  if(diff <= 0) {
    timerData.classList.add('hide');
    h2.classList.remove('hide');
    h2.textContent = `${titleDate.value} завершился ${dateTimer.value}`;
    return;
  };
}

function startTimer() {
  btnStart.classList.add('hide');
  btnReset.classList.remove('hide');
  startData.classList.add('hide');
  timerData.classList.remove('hide');

  checkDate();

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff/(1000*60*60))%24);
  let minutes = Math.floor((diff/(1000*60))%60);
  let seconds = Math.floor((diff/1000)%60);
  numbers.textContent = `${days}:${hours}:${minutes}:${seconds}`; 
};

btnStart.addEventListener('click', countdown);
