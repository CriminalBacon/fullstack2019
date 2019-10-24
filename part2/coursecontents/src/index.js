import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => 
  <h1>{title}</h1>


const Total = ({ parts }) => {
  const exerciseArray = parts.map(x => x.exercises)
  const total = exerciseArray.reduce( (sum, exercise) => {
    return sum + exercise
  })

  return <p>total of {total} exercises</p>
}
  

const Part = ({part}) => 
  <p> {part.name} {part.exercises}</p>

  
const Content = ({parts}) => 
  parts.map(x => <Part key={x.id} part={x}/>)


const Course = ({ courses }) => 
  courses.map(course =>
       
      <div key={course.id} >
        <Header title={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
      )
  



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

    return (
      <div>
        <Course courses={courses} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)