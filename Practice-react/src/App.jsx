import './App.css'


function QuestionOption ({children, onselect, isSelected}) {
  return (
    <button className= {isSelected? 'active' : null}  onClick={onselect}>{children}</button>
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
  const [isClicked, setisClicked] = useState(false)

  function configButtonHandler () {
   setisClicked(true)
  }

  return (
    <>
      <div className="config-container">
        <Title titleName= 'How well do you know me?' />

        <div className="config-option">
          <h4>No of Questions</h4>
          <div>
            <QuestionOption isSelected={buttonContent === 5} onselect={() => buttonClicked(5)}>5</QuestionOption>
            <QuestionOption isSelected={buttonContent === 10} onselect={() => buttonClicked(10)}>10</QuestionOption>
            <QuestionOption isSelected={buttonContent === 15} onselect={() => buttonClicked(15)}> 15</QuestionOption>
          </div>
        </div>

        <div className="start-quiz-wrapper">
          <button onClick={configButtonHandler} aria-label="Start the quiz">Start Quiz</button>
        </div>
      </div>
    </>
  )
}

export default App
