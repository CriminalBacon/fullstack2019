import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => 
  <h1>{title}</h1>


const Total = ({ parts }) => {
  const exerciseArray = parts.map(x => x.exercises)
  const total = exerciseArray.reduce( (sum, exercise) => {
    console.log("test", sum, exercise)
    return sum + exercise
  })

  return <p>total of {total} exercises</p>
}
  

const Part = ({part}) => 
  <p> {part.name} {part.exercises}</p>

  
const Content = ({parts}) => 
  parts.map(x => <Part key={x.id} part={x}/>)


const Course = ({ course }) => {

  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
    )
}


const App = () => {
    
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }

    return (
      <div>
        <Course course={course} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)