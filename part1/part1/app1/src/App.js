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
      <p>Exercise is {props.part}, number of the exercise is {props.name} </p>
    </div>
  )
}

const Content = () =>{

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Part part={part1} name={exercises1} />
      <Part part={part2} name={exercises2} />
      <Part part={part3} name={exercises3}/>
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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />      
      <Content />          
      <Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
  )
}

export default App