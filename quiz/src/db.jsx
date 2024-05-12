// import { nanoid } from 'nanoid'

// const isSelected = nanoid();

export const questions = [
  {
    isCorrect: false,
    question: 'What is the capital of Nigeria What is the capital of Nigeria?',
    choices: [
      'Abuja',
      'Lagos',
      'Accra',
      'Repuclic of Nigeria'
    ],
    correctAnswer: 'Abuja'
  },
  {
    isCorrect: false,
    question: 'How many states are there in Nigeria?',
    choices: [
      26,
      36,
      46,
      56
    ],
    correctAnswer: 36
  },
  {
    isCorrect: false,
    question: 'How many days make a week',
    choices: [
      4,
      5,
      6,
      7
    ],
    correctAnswer: 7
  },
  {
    isCorrect: false,
    question: 'Which of the following is used in React.js to increase performance?',
    choices: [
      'Virtual DOM',
      'Original DOM',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Virtual DOM'
  },
  {
    isCorrect: false,
    question: '5What is the device is required for internet connection?',
    choices: [
      'Server-side framework',
      'User Interface framework',
      'Both A and B',
      'None of the Above'
    ],
    correctAnswer: 'User Interface framework'
  }
]

export const InitialResult = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0
}