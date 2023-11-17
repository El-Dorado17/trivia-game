const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

//when this func runs, the start button goes away and a random question is shown
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

//move to the next question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//here is the actual question with buttons for answers, checking if correct value is true
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//resets state to show a new question
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

//when an answer is selected, the style should change to show green if correct or red if incorrect
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}


//clear the status for the next question coming in
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


//all questions
const questions = [
  {
    question: "What year is known as Y2K?",
    answers: [
      { text: '2000', correct: true },
      { text: '1999', correct: false }
    ]
  },
  {
    question: 'Which of these events occured in 1966?',
    answers: [
      { text: 'The Beatles released their album "Revolver"', correct: true },
      { text: 'England hosted and won the World Cup against West Germany at Wembley Stadium', correct: true },
      { text: 'The first Automated Teller Machine (ATM) was introduced', correct: true },
      { text: 'The first episode of the science fiction television series "Star Trek" aired', correct: true }
    ]
  },
  {
    question: 'What was the company Nintendo originally known for?',
    answers: [
      { text: 'Playing Cards', correct: true },
      { text: 'Soap', correct: false },
      { text: 'Beer', correct: false },
      { text: 'Furniture', correct: false }
    ]
  },
  {
    question: "What is Ely's middle name?",
    answers: [
      { text: 'Frank', correct: false },
      { text: 'Julian', correct: false },
      { text: 'Paul', correct: false },
      { text: '___', correct: true }
    ]
  },
  {
    question: 'What day is December 25th?',
    answers: [
      { text: 'Easter', correct: false },
      { text: 'Christmas', correct: true },
      { text: 'Valentines Day', correct: false },
      { text: 'Tree-Day', correct: false }
    ]
  },
  {
    question: 'How would you pronounce the musical key: "A#" ?',
    answers: [
      { text: 'A-Number', correct: false },
      { text: 'A-Sharp', correct: true },
      { text: 'A-Pound', correct: false },
      { text: 'A-Hash', correct: false }
    ]
  },
  {
    question: 'Who were the founding twins of Rome, raised by Faustulus?',
    answers: [
      { text: 'Mario & Luigi', correct: false },
      { text: 'Prof. Lupin & Sirius Black', correct: false },
      { text: 'Ben & Jerry', correct: false },
      { text: 'Romulus & Remus', correct: true },
    ]
  },
  {
    question: 'What is the chemical symbol for gold?',
    answers: [
      { text: 'Au', correct: true },
      { text: 'Go', correct: false },
      { text: 'Or', correct: false },
      { text: 'Ag', correct: false }
    ]
  }
]