import React, { useState } from 'react'
import ReactDom from 'react-dom'

const Header = ({ heading }) => (
    <h1>
        {heading}
    </h1>
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
    const [total, setTotal] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        setTotal(total + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setTotal(total + 1)
    }

    const setAverage = ({good, bad, total}) => {
        return (
            (good - bad) / total
        )
        
    }

    const setPositivePercent = ({good, total}) => {
        return (
            (good / total) * 100
        )
    }


    return (
        <div>
            <Header heading="give feedback"/>
            <Button onClick={handleGoodClick} text='good'/>
            <Button onClick={handleNeutralClick} text='neutral'/>
            <Button onClick={handleBadClick} text='bad'/>
            <Header heading="statistics"/>
            <Content label='Good' number={good}></Content>
            <Content label='Neutral' number={neutral}></Content>
            <Content label='Bad' number={bad}></Content>
            <Content label='All' number={(total)}></Content>
            <Content label='Average' number={setAverage({good, bad, total})}/>
            <Content label='Positive' number={setPositivePercent({good, total})}/>
        </div>
    )

}

ReactDom.render(<App />, 
    document.getElementById('root')
)
