import './App.css'
import { useState } from 'react';
import { Questions } from './questions';
import { fisherYatesShuffle } from './questions';
import QuizOver from '/src/assets/quiz-over.png';


fisherYatesShuffle(Questions);

function QuestionOption ({children, isSelected, ...rest}) {
  return (
    <button className= {isSelected? 'active' : null}  {...rest}>{children}</button>
  )
}

function Title ({titleName}) {
  return (
    <h2>{titleName}</h2>
  )
}

function AnswerOption ({children}) {
  return (
    <li className='answer-option'><p>{children}</p></li>
  )
}




function App() {
  const [buttonContent, setbuttonContent] = useState()
  const [selectedQuestion, setselectedQuestions] = useState([])
  const [isClicked, setisClicked] = useState(false)
  const [isQuizOver, setIsQuizOver] = useState(false)
  const [count, setcount] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  const [isAnswered, setIsAnswered] = useState(false); 

  function buttonClicked (buttonNumber) {
    setbuttonContent(buttonNumber)
    const slicedQuestions = Questions.slice(0, buttonNumber);
    setselectedQuestions(slicedQuestions)
  }

  function configButtonHandler () {
   setisClicked(true)
  }

  function changeQuestion () {

    const nextQuestionIndex = count + 1;
    if (nextQuestionIndex >= selectedQuestion.length) {
      setIsQuizOver(true)
    } else {
      setcount(nextQuestionIndex)
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  }

  function handleAnswerClick(option) {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);
    setAnswerCount(prevCount => {
      if (option === selectedQuestion[count].answer) {
        return prevCount + 1;
      }
      return prevCount;
    }
    );
  }

  function resetQuiz () {
    const shuffledQuestions = [...Questions];
    fisherYatesShuffle(shuffledQuestions);
    setselectedQuestions(shuffledQuestions.slice(0, buttonContent));
    setisClicked(false)
    setIsQuizOver(false)
    setcount(0)
    setAnswerCount(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setselectedQuestions([])
    setbuttonContent(undefined)
  }

  return (
    <>
      {!isClicked &&
      (<div className="config-container">
        <Title titleName= 'How well do you know me?' />

        <div className="config-option">
          <h4>No of Questions</h4>
          <div>
            <QuestionOption isSelected={buttonContent === 5} onClick={() => buttonClicked(5)}>5</QuestionOption>
            <QuestionOption isSelected={buttonContent === 10} onClick={() => buttonClicked(10)}>10</QuestionOption>
            <QuestionOption isSelected={buttonContent === 15} onClick={() => buttonClicked(15)}> 15</QuestionOption>
          </div>
        </div>

        <div className="start-quiz-wrapper">
          <button onClick={configButtonHandler} aria-label="Start the quiz">Start Quiz</button>
        </div>
      </div>)}

      {isClicked && !isQuizOver &&
      (<div className="quiz-container fade-in">
        <header className="quiz-header">
          <Title titleName= 'Quiz Application' />
        </header>

        <div className="quiz-content">
          <h1>{count + 1}. {selectedQuestion[count].question}</h1>

          <ul className="answer-options">
            {selectedQuestion[count].options.map(
              (option, index) => (
               <AnswerOption key={index}>{option}</AnswerOption> 
              )
            )}

          </ul>
        </div>

        <div className="quiz-footer">
          <p className="question-status"><b>{count + 1}</b> of <b>{selectedQuestion.length}</b> Questions</p>

          <div className="nextButton">
            <button onClick={changeQuestion}>Next</button>
          </div>
        </div>
      </div>)}


      {isQuizOver && 
      (<div className="result-container fade-in">
          <img src={QuizOver} alt="congratulations emoji" className="result-img"/>
          <Title titleName='Quiz Completed!' />
          <p className="result-message"><b>3</b> out of <b>5</b></p>
          <button className="try-again-btn" >Try Again</button>
      </div>)}
    </>
  )
}

export default App
