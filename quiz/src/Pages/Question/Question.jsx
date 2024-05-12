import React, { useEffect, useState } from 'react'
import './Question.css'
import { questions } from '../../db'
import { InitialResult } from '../../db'

const Question = () => {
  // the questionIndex state is use to select the index of the question to be displayed
  const [questionIndex, setQuestionIndex] = useState(0);

  // the score state is used to save the score from the quiz
  const [result, setResult] = useState(InitialResult);
  console.log(result)

  // the selectedOption state is save the option selected. It is set to null at initial state
  const [selectedOption, setSelectedOption] = useState(null);

  // the state will be used to display result
  const [showResult, setShowResult] = useState(false)

  // destructured the questions properties
  const {correctAnswer} = questions[questionIndex];
  const [quizQuestion, setQuizQuestion] = useState(questions[questionIndex])
  console.log(quizQuestion);

  
  const checkAnswer = (e, choice) => {
    setSelectedOption(choice);
    setQuizQuestion(prevQuestion => {
      if (choice === correctAnswer) {
        return {...prevQuestion, isCorrect: true}
      }
      else{
        return {...prevQuestion, isCorrect: false}
      }
    })
  }

 
  // function for the next button
  const handleNext = (e, choice) => {
    setQuestionIndex(prevIndex => prevIndex + 1);
    setQuizQuestion(questions[questionIndex + 1]); // Update quizQuestion state with the next question
    setSelectedOption(null); // Reset selectedOption state when moving to the next question
  }

  // function for the prev button
  const handlePrev = () => {
    if(questionIndex > 0) {
      setQuestionIndex(questionIndex - 1)
      setQuizQuestion(questions[questionIndex - 1]); // Update quizQuestion state with the next question
    }
  }

  // function for the submit button
  const handleSubmit = () => {
    setShowResult(true)
  }

  // function for the play again button
  const playAgain = () => {
    setShowResult(false);
    setQuestionIndex(0);
  }

  return (
    <div className='general-bx'>
      { !showResult ?
        ( <div className='quiz-bx'>
        {/* The number of question the user is on questionIndex + 1 and wiil update as questionIndex is updated.
            The number of question to be answered is length of the questions array 
        */}
          <p className='active-question-no'>{questionIndex + 1}/{questions.length}</p>
          <hr className='line'/>
          <div className='question-option-bx'>
            {/* Call the destructured question */}
            <p className='question'>{quizQuestion.question}</p>
            <div className='option-bx'>
              {/* Map through the the destructured choices and return a jsx of all the choices */}
              {quizQuestion.choices.map((choice, index) => {
                return (
                  <div onClick={(e)=>checkAnswer(e, choice)} key={index} id={index} className={`option option${index + 1} ${selectedOption === choice ? 'selected' :  '' }`}>{choice}</div>
                )
              })}
            </div>
            <div className='btn-bx'>
              <button id='prev=btn' onClick={handlePrev} className={questionIndex === 0 ? 'grey-btn' : 'prev-btn'}>Prev</button>
              { questionIndex < questions.length -1 ?
              (<button id='next-btn' onClick={handleNext} className={questionIndex === 4 ? 'grey-btn' : 'next-btn'}>Next</button>)
              :
              <button id='submit-btn' onClick={handleSubmit} className='submit-btn'>Submit</button>
              }
            </div>
          </div>
        </div> )
        :
        <div className='result-bx'>
          <p className='result'>Number of questions: {questions.length}</p>
          <p className='result'>Correct Answers: {result.correctAnswers}</p>
          <p className='result'>Wrong Answers: {result.wrongAnswers}</p>
          <div className='score-bx'>
            <p className='score'>{result.score}</p>
          </div>
          <div className='play-again-bx'>
            <button onClick={playAgain} className='play-again'>Play Again</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Question