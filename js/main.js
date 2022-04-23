// Importar funciones
import { savePlayerName } from './functions/gameStartFunctions.js';

//Obtener elementos
const formName = document.getElementById('formName');

// Eventos
formName.addEventListener('submit', savePlayerName);
