// Importar funciones
import { savePlayerName, showGameRules, showGameStart } from './functions/gameStartFunctions.js';

//Obtener elementos
const formName = document.getElementById('formName');
const gameStart = document.querySelector('#gameStart button');
const gameRules = document.querySelector('#gameRules button');

// Variables del juego
let questionLevel = 1;
let points = 0;
let playerName = localStorage.getItem('playerName');

// Eventos
formName.addEventListener('submit', savePlayerName);
gameStart.addEventListener('click', showGameRules);
gameRules.addEventListener('click', () => {
  showGameStart(questionLevel);
  questionLevel++;
});
