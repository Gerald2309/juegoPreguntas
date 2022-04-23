// Preuntas
import { levelOne, levelTwo, levelThree, levelFour, levelFive } from '../questions.js';

// Seleccionar nivel y pregunta
export const selectQuestion = (level) => {
  let selectedQuestion = Math.floor(Math.random() * (5 - 0)) + 0;
  let question = {};
  let reward = 0;

  switch (level) {
    case 1:
      question = levelOne[selectedQuestion];
      reward = 100;
      break;
    case 2:
      question = levelTwo[selectedQuestion];
      reward = 200;
    case 3:
      question = levelThree[selectedQuestion];
      reward = 300;
      break;
    case 4:
      question = levelFour[selectedQuestion];
      reward = 400;
      break;
    case 5:
      question = levelFive[selectedQuestion];
      reward = 1000;
      break;
  }

  showSelectQuestion(question, reward);
};

// Mostrar pregunta
export const showSelectQuestion = (question, reward) => {
  let questionContainer = document.querySelector('#game .question');
  let questionOptions = document.querySelector('#game .options');
  let questionElement = document.createElement('h2');
  let questionText = document.createTextNode(question.question);

  questionElement.appendChild(questionText);
  questionContainer.appendChild(questionElement);

  question.options.forEach((option) => {
    let optionElement = document.createElement('li');
    let optionText = document.createTextNode(option);

    optionElement.appendChild(optionText);
    questionOptions.appendChild(optionElement);
  });

  let options = document.querySelectorAll('#options li');

  options.forEach((option) => {
    option.addEventListener('click', () => {
      checkAnswer(option, question, reward);
    });
  });
};

// Verificar respuesta
export const checkAnswer = (selectedOption, question, reward) => {
  let buttons = document.getElementById('buttons');
  let nextButton = buttons.querySelector('.next-btn');
  let withdrawButton = buttons.querySelector('.withdraw-btn');

  let points = parseInt(localStorage.getItem('points'));
  let selectedOptionText = selectedOption.textContent;
  let options = document.querySelectorAll('#options li');

  options.forEach((option) => {
    option.classList.add('disabled');
  });

  if (selectedOptionText === question.answer) {
    selectedOption.classList.add('correct');
    buttons.classList.add('active');
    nextButton.classList.add('active');
    withdrawButton.classList.add('active');

    // Almacenar puntos
    localStorage.setItem('points', (points += reward));

    // Alerta de respuesta correcta
    Swal.fire({
      icon: 'success',
      title: 'Respuesta correcta',
      text: 'Ganaste ' + reward + ' puntos',
      confirmButtonText: 'Entendido',
    });
  } else {
    selectedOption.classList.add('wrong');
    buttons.classList.add('active');
    withdrawButton.classList.add('active');

    // Marcar la respuesta que es correcta
    options.forEach((option) => {
      if (option.textContent === question.answer) {
        option.classList.add('correct');
      }
    });

    // Restablecer puntos
    localStorage.setItem('points', 0);

    // Alerta de respuesta incorrecta
    Swal.fire({
      icon: 'error',
      title: 'Respuesta incorrecta',
      text: 'Perdiste todos tus puntos',
      confirmButtonText: 'Entendido',
    });
  }
};
