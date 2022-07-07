import { useState } from 'react'

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


      <h1>statistics</h1>
      <div>
        <ul>good {good}</ul>
        <ul>neutral {neutral}</ul>
        <ul>bad {bad}</ul>
        <ul>all {good+neutral+bad}</ul>
        <ul>average {(good*1+neutral*0+bad*-1)/(good+neutral+bad)}</ul>
        <ul>positive {good*100/(good+neutral+bad)}</ul>
      </div>

      

    </div>
  )
}

export default App