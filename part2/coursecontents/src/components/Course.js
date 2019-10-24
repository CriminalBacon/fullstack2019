import React from 'react'

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
       
      <div key={course.id}>
        <Header title={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
      )

export default Course