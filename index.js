/*
1. Сохраняем в переменную название заголовка таймера.
2. Выбираем дату отсчета и также сохраняем в переменную.
3. Добавляем обработчик на кнопку начать. При выполенеии обработчика запускается функция, которая
- добавляет класс hide к div.input;
- в h1 записываем содержимое переменной заголовка таймера;
- кнопку "Начать" также скрываем;
- запускается сам таймер, значения которого берутся из ранее сохранненной переменной;
4. на кнопку "Сбросить" добавляется обработчик, который делает все обратное (возвращает исходное состояние тацмера, удаляет класс hide везед где добавляли его);
5. Делаем так чтобы при обновлении страницы таймер не соскакивал.
*/

'use strict'

let titleDate = document.querySelector('#title-date');
let date = document.querySelector('#date');
let btnStart = document.querySelector('#btn');
let btnReset = document.querySelector('#btn-reset');
let nameTimer = document.querySelector('h1');
let startData = document.querySelector('.input');
let timerData = document.querySelector('.output');

function countdown() {
  console.log(titleDate.value);
  console.log(date.value); 
  nameTimer.textContent = titleDate.value;
  let countdownDate = date.value;
  if(!countdownDate) {
    alert('Пожалуйста, введите дату');
  } else {
    return startTimer;
  };
};

function startTimer() {
  btnStart.classList.add('hide');
  btnReset.classList.remove('hide');
  startData.classList.add('hide');
  timerData.classList.remove('hide');
}

btnStart.addEventListener('click', countdown);
