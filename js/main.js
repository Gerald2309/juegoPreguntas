// Importar funciones
import { savePlayerName, showGameRules, showGameStart } from './functions/gameStartFunction.js';
import { selectQuestion } from './functions/gameFunctions.js';

//Obtener elementos
const formName = document.getElementById('formName');
const gameStart = document.querySelector('#gameStart button');
const gameRules = document.querySelector('#gameRules button');
const buttons = document.getElementById('buttons');
const nextButton = buttons.querySelector('.next-btn');
const withdrawButton = buttons.querySelector('.withdraw-btn');
const playAgain = buttons.querySelector('.play-again');

// Variables del juego
let questionLevel = 1;

// Eventos
formName.addEventListener('submit', savePlayerName);
gameStart.addEventListener('click', showGameRules);
gameRules.addEventListener('click', () => {
  showGameStart();
  selectQuestion(questionLevel);
  questionLevel++;
});

nextButton.addEventListener('click', () => {
  if (questionLevel < 6) {
    let points = document.getElementById('points');

    points.innerHTML = '';

    let pointsElement = document.createElement('h2');
    let pointsText = document.createTextNode(`Puntos: ${localStorage.getItem('points')}`);
    pointsElement.appendChild(pointsText);
    points.appendChild(pointsElement);

    selectQuestion(questionLevel);
    buttons.classList.remove('active');
    nextButton.classList.remove('active');
    withdrawButton.classList.remove('active');
    questionLevel++;
  } else {
    let points = localStorage.getItem('points');
    let playerName = localStorage.getItem('playerName');

    Swal.fire({
      icon: 'success',
      title: 'Felicidades ' + playerName + ', Completaste el juego!',
      text: 'El total de puntos que ganaste es ' + points,
      confirmButtonText: 'Entendido',
    }).then(() => {
      localStorage.setItem('points', 0);
      location.reload();
    });
  }
});

withdrawButton.addEventListener('click', () => {
  Swal.fire({
    icon: 'warning',
    title: '¿Estás seguro?',
    text: '¿No deseas terminar el juego?, no podras sumar más puntos',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, retirarse',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.value) {
      let points = localStorage.getItem('points');
      let playerName = localStorage.getItem('playerName');

      Swal.fire({
        icon: 'success',
        title: 'Felicidades ' + playerName + '!',
        text: 'El total de puntos que ganaste es de ' + points,
        confirmButtonText: 'Entendido',
      }).then(() => {
        localStorage.setItem('points', 0);
        location.reload();
      });
    }
  });
});

playAgain.addEventListener('click', () => {
  localStorage.setItem('points', 0);
  location.reload();
});
