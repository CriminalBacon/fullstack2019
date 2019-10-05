import React, { useState } from 'react'
import ReactDom from 'react-dom'

const Header = ({ heading }) => (
    <p>
        <h1>
        {heading}
        </h1>
    </p>
)

const Button = ({ onClick, text }) => (
    <button onClick = {onClick}>
        {text}
    </button>

)

const Content = ({ label, number }) => (
    <p>
        {label} {number}
    </p>

)

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)

    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Header heading="give feedback"/>
            <Button onClick={handleGoodClick} text='good'/>
            <Button onClick={handleNeutralClick} text='neutral'/>
            <Button onClick={handleBadClick} text='bad'/>
            <Header heading="statistics"/>
            <p>
            <Content label='Good' number={good}></Content>
            <Content label='Neutral' number={neutral}></Content>
            <Content label='Bad' number={bad}></Content>
            </p>
        </div>
    )

}

ReactDom.render(<App />, 
    document.getElementById('root')
)
