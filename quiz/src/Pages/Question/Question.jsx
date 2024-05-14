import React, { useEffect, useState } from 'react'
import './Question.css'
import { data } from '../../db'
import { InitialResult } from '../../db'

const Question = () => {
  
  // the questionIndex state is use to select the index of the question to be displayed
  const [index, setIndex] = useState(0);

  // the state will be used to save the questions
  const [quizQuestion, setQuizQuestion] = useState(data[index])

  // destructured the questions properties
  const { question, choices, correctAnswer } = data[index];

  // the selectedOption state is save the option selected. It is set to null at initial state
  const [selectedOption, setSelectedOption] = useState(null);

  // the state will be used to display result
  const [showResult, setShowResult] = useState(false)

  // the score state is used to save the score from the quiz
  const [result, setResult] = useState(InitialResult);

  // an array to save updated question
  const [updatedQuestion, setUpdatedQuestion] = useState(data);
  console.log(updatedQuestion)


  const checkAnswer = (e, choice) => {
    setSelectedOption(choice);
    setUpdatedQuestion(prevData => {
      let newData = [...prevData];
      if (choice === correctAnswer) {
        newData[index].isCorrect = true;
        return newData
      }
      else{
        newData[index].isCorrect = false;
        return newData
      }
    })
  }
 
  // function for the next button
  const handleNext = () => {
    setIndex(prevIndex => prevIndex + 1);
    setQuizQuestion(data[index + 1]); // Update quizQuestion state with the next question
    setSelectedOption(null); // Reset selectedOption state when moving to the next question
  }

  // function for the prev button
  const handlePrev = () => {
    if(index > 0) {
      setIndex(index - 1)
      setQuizQuestion(data[index - 1]); // Update quizQuestion state with the next question
    }
  }


  const handleSubmit = () => {
    let correctCount = 0;
    let wrongCount = 0;
    
  //   // Loop through all quizUpdata to calculate correct and wrong answers
    updatedQuestion.forEach(question => {
      if (question.isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }
    })
    
  // Update the result state
    setResult({
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      score: (correctCount / data.length) * 100 // Calculate score percentage
    });
    setShowResult(true);
  }


  // function for the play again button
  const playAgain = () => {
    setShowResult(false);
    setIndex(0);

    // Iterate through quizUpdate and set all isCorrect properties to false
    setUpdatedQuestion(updatedQuestion.map(question => {
      return { ...question, isCorrect: false }
    }))
  }

  return (
    <div className='general-bx'>
      { !showResult ?
        ( <div className='quiz-bx'>
        {/* The number of question the user is on questionIndex + 1 and wiil update as questionIndex is updated.
            The number of question to be answered is length of the questions array 
        */}
          <p className='active-question-no'>{index + 1}/{data.length}</p>
          <hr className='line'/>
          <div className='question-option-bx'>
            {/* Call the destructured question */}
            <p className='question'>{ question }</p>
            <div className='option-bx'>
              {/* Map through the the destructured choices and return a jsx of all the choices */}
              {choices.map((choice, index) => {
                return (
                  <div onClick={(e)=>checkAnswer(e, choice)} key={index} id={index} className={`option option${index + 1} ${selectedOption === choice ? 'selected' :  '' }`}>{choice}</div>
                )
              })}
            </div>
            <div className='btn-bx'>
              <button id='prev=btn' onClick={handlePrev} className={index === 0 ? 'grey-btn' : 'prev-btn'}>Prev</button>
              { index < data.length -1 ?
              (<button id='next-btn' onClick={handleNext} className={index === 4 ? 'grey-btn' : 'next-btn'}>Next</button>)
              :
              <button id='submit-btn' onClick={handleSubmit} className='submit-btn'>Submit</button>
              }
            </div>
          </div>
        </div> )
        :
        <div className='result-bx'>
          <p className='result'>Number of questions: {data.length}</p>
          <p className='result'>Correct Answers: {result.correctAnswers}</p>
          <p className='result'>Wrong Answers: {result.wrongAnswers}</p>
          <div className='score-bx'>
            <p className='score'>{result.score}%</p>
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