// Guardar nombre del jugador y mostrar el modal de inicio de juego
export const savePlayerName = (e) => {
    e.preventDefault();
    let playerName = document.getElementById('playerName');
    let gameStart = document.getElementById('gameStart');
    let name = document.querySelector('#formName input').value;
    localStorage.setItem('playerName', name);
  
    playerName.classList.remove('active');
    gameStart.classList.add('active');
  };
  
  // Mostrar reglas del juego
  export const showGameRules = () => {
    let gameRules = document.getElementById('gameRules');
    let gameStart = document.getElementById('gameStart');
  
    gameStart.classList.remove('active');
    gameRules.classList.add('active');
  };
  