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
    const part1 = 'Fundementals for React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    
    return (
        <div>
            <Header courseName={course}/>
            <Part partName={part1} exerciseNumber={exercises1}/>
            <Part partName={part2} exerciseNumber={exercises2}/>
            <Part partName={part3} exerciseNumber={exercises3}/>
            <Total sum={exercises1 + exercises2 + exercises3}/>

        </div>    
    )

}

ReactDOM.render(<App />, document.getElementById('root'))
