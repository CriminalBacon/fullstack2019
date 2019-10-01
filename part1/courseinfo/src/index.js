import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.courseName}</h1>

    )
}

const Part = (props) => {
    return (
        <div>
            <p>
            {props.partName} {props.exerciseNumber}
            </p>
        </div>

    )
}

const Total = (props) => {
    return(
        <p>Number of exercises {props.sum}</p>

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
      name: 'State of a component',
      exercises: 14
    }
    
    return (
        <div>
            <Header courseName={course}/>
            <Part partName={part1.name} exerciseNumber={part1.exercises}/>
            <Part partName={part2.name} exerciseNumber={part2.exercises}/>
            <Part partName={part3.name} exerciseNumber={part3.exercises}/>
            <Total sum={part1.exercises + part2.exercises + part3.exercises}/>

        </div>    
    )

}

ReactDOM.render(<App />, document.getElementById('root'))
