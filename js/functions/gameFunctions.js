// Preuntas
import { levelOne, levelTwo, levelThree, levelFour, levelFive } from '../questions.js';

// Seleccionar nivel y pregunta
export const selectQuestion = (level) => {
  let selectedQuestion = Math.floor(Math.random() * (5 - 0)) + 0;
  let question = {};

  switch (level) {
    case 1:
      question = levelOne[selectedQuestion];
      break;
    case 2:
      question = levelTwo[selectedQuestion];
    case 3:
      question = levelThree[selectedQuestion];
      break;
    case 4:
      question = levelFour[selectedQuestion];
      break;
    case 5:
      question = levelFive[selectedQuestion];
      break;
  }

  showSelectQuestion(question);
};

// Mostrar pregunta
export const showSelectQuestion = (question) => {
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
      checkAnswer(option, question);
    });
  });
};

// Verificar respuesta
export const checkAnswer = (selectedOption, question) => {
  let selectedOptionText = selectedOption.textContent;
  let options = document.querySelectorAll('#options li');

  options.forEach((option) => {
    option.classList.add('disabled');
  });

  if (selectedOptionText === question.answer) {
    selectedOption.classList.add('correct');
  } else {
    selectedOption.classList.add('wrong');
    // Marcar la respuesta es correcta
    options.forEach((option) => {
      if (option.textContent === question.answer) {
        option.classList.add('correct');
      }
    });
  }
};
