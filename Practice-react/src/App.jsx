import './App.css'


function QuestionOption ({children}) {
  return (
    <button className="question-btn">{children}</button>
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


  return (
    <>
      <div className="config-container">
        <h2>How well do you know me?</h2>

        <div className="config-option">
          <h4>No of Questions</h4>
          <div>
            <QuestionOption>5</QuestionOption>
            <QuestionOption>10</QuestionOption>
            <QuestionOption>15</QuestionOption>
          </div>

        </div>
        

      </div>
    </>
  )
}

export default App
