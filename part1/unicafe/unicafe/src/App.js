import { useState } from 'react'

const Statistics = (props) => {
  const {good, neutral, bad} = props

  return (
    <div>
    <h1>statistics</h1>
    <li>
      <ul>good {good}</ul>
      <ul>neutral {neutral}</ul>
      <ul>bad {bad}</ul>
      <ul>all {good+neutral+bad}</ul>
      <ul>average {(good*1+neutral*0+bad*-1)/(good+neutral+bad)}</ul>
      <ul>positive {good*100/(good+neutral+bad)}</ul>
    </li>
    </div>
)
}

const Button = (props) => {
  const {someFeedback, clickButton} = props;

  return (
    <button onClick={()=>clickButton()}>{someFeedback}</button>   
  )
}

const StatisticsLine = (props) => {
  const {text, feedback} = props;

  return ( 
  <tr> 
    <td>{text}</td> 
    <td>{feedback}</td>
  </tr>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
   
    <div>
      <h1>Give feedback</h1>

      <Button someFeedback="good" clickButton={()=>setGood(good+1)} />
      <Button someFeedback="neutral" clickButton={()=>setNeutral(neutral+1)} />
      <Button someFeedback="bad" clickButton={()=>setBad(bad+1)} />
      <h1>Statistics</h1>
      
      <table>
       
      <StatisticsLine text="good" feedback={good}/>
      <StatisticsLine text="neutral" feedback={neutral}/>
      <StatisticsLine text="bad" feedback={bad}/>
      <StatisticsLine text="all" feedback={good+bad+neutral}/>
      <StatisticsLine text="average" feedback={(good*1+neutral*0+bad*-1)/(good+neutral+bad)}/>
      <StatisticsLine text="positive" feedback={good*100/(good+neutral+bad)}/>
      
      </table>
      {/* <button onClick={() => setGood(good +1)}>
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
      */}
    </div>
  )
}

export default App