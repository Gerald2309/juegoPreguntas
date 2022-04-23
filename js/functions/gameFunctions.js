// Preuntas
import { levelOne, levelTwo, levelThree, levelFour, levelFive } from '../questions.js';

// Seleccionar nivel y pregunta
export const selectQuestion = (level) => {
  let selectedQuestion = Math.floor(Math.random() * (6 - 1)) + 1;
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
};

