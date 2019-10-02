import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.courseName}</h1>

    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <p>
            {props.parts[0].name} {props.parts[0].exercises}
            </p>
            <p>
            {props.parts[1].name} {props.parts[1].exercises}
            </p>
            <p>
            {props.parts[2].name} {props.parts[2].exercises}
            </p>
        </div>

    )
}

const Total = (props) => {
    return(
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

    )

}

const App = () => {
    const course = 'Half Stack application development'

    const parts = [
        {
            name:  'Fudementals of React',
            exercises: 10 
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }

    ]
    
    return (
        <div>
            <Header courseName={course}/>
            <Content parts={parts} />
            <Total parts={parts}/>

        </div>    
    )

}

ReactDOM.render(<App />, document.getElementById('root'))
