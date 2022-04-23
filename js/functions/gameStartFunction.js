export const savePlayerName = (e) => {
    e.preventDefault();
    let playerName = document.getElementById('playerName');
    let gameStart = document.getElementById('gameStart');
    let name = document.querySelector('#formName input').value;
    localStorage.setItem('playerName', name);
  
    playerName.classList.remove('active');
    gameStart.classList.add('active');
  };
  