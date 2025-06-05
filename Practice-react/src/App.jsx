import './App.css'


function QuestionOption ({children}) {
  return (
    <button className="question-btn">{children}</button>
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

          </div>

        </div>
        

      </div>
    </>
  )
}

export default App
