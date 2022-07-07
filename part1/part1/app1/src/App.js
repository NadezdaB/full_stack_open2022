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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name:  'State of a component',
    exercises: 14
  } 
 

  return (
    <div>
      <Header course={course} />      
      <Content part1={part1.name} part2={part2.name} part3={part3.name} name1={part1.exercises} name2={part2.exercises} name3={part3.exercises}/>          
      <Total a={part1.exercises} b={part2.exercises} c={part3.exercises} />
    </div>
  )
}

export default App