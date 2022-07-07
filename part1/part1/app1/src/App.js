const Header = (props) =>{
return (
  <div>
      <h1>Name of the course is {props.course}</h1>
  </div>
)

}

const Content = (props) =>{
  return (
    <div>
      <p>Exercise is {props.part}, number of the exercise is {props.number} </p>
    </div>    
  )

}

const Total = (calc) => {
  return (
    <div>
      <p>Number of exercises is {calc.a+calc.b+calc.c}</p>
    </div>
  ) 
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} number={exercises1} />
      <Content part={part2} number={exercises2} />
      <Content part={part3} number={exercises3} />          
      <Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
  )
}

export default App