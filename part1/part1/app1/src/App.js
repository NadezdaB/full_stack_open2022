const Header = (props) =>{
return (
  <div>
      <h1>Name of the course is {props.course}</h1>
  </div>
)

}

const Part = (props) => {
  return (
    <div>
      <p>Exercise is {props.part}, number of the exercise is {props.exercise} </p>
    </div>
  )
}

const Content = (ex) =>{

  return (
    <div>
      <Part part={ex.part1} exercise={ex.name1} />
      <Part part={ex.part2} exercise={ex.name2} />
      <Part part={ex.part3} exercise={ex.name3} />
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
      <Content part1={part1} part2={part2} part3={part3} name1={exercises1} name2={exercises2} name3={exercises3}/>          
      <Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
  )
}

export default App