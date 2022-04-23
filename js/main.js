// Importar funciones
import { savePlayerName, showGameRules } from './functions/gameStartFunctions.js';

//Obtener elementos
const formName = document.getElementById('formName');
const gameStart = document.querySelector('#gameStart button');

// Eventos
formName.addEventListener('submit', savePlayerName);
gameStart.addEventListener('click', showGameRules);
