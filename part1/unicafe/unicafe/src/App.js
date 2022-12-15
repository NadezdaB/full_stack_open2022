import { useState } from 'react'

const Statistics = (props) => {
  const {good, neutral, bad} = props

  return (
    <div>
    <h1>statistics</h1>
      <ul>good {good}</ul>
      <ul>neutral {neutral}</ul>
      <ul>bad {bad}</ul>
      <ul>all {good+neutral+bad}</ul>
      <ul>average {(good*1+neutral*0+bad*-1)/(good+neutral+bad)}</ul>
      <ul>positive {good*100/(good+neutral+bad)}</ul>
    </div>
)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
   
    <div>
      <h1>give feedback</h1>
      
      <button onClick={() => setGood(good +1)}>
       good
      </button>

      <button onClick={() => setNeutral(neutral +1)}>
       neutral
      </button>

      <button onClick={() => setBad(bad +1)}>
       bad
      </button>  
      { (good+bad+neutral) ?    
      <Statistics good={good} neutral={neutral} bad={bad} />
      :
      <div>No feedback given</div>
      }
    </div>
  )
}

export default App