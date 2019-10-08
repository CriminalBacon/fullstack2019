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

const Statistic = ({label, number}) => {
    if (label === 'Positive') {
        return (
            <p>
                {label} {number}%
            </p>
        )
    }
    return (
        <p>
        {label} {number}
    </p>
    )
}

const Statistics = ({good, bad, neutral, total}) => {
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
    if (good === 0 && neutral === 0 && bad === 0){
        return (
        <div>
            No feedback given
        </div>
        )
    }

    return (
        <div>
            <Statistic label='Good' number={good}/>
            <Statistic label='Neutral' number={neutral}/>
            <Statistic label='Bad' number={bad}/>
            <Statistic label='All' number={(total)}/>
            <Statistic label='Average' number={setAverage({good, bad, total})}/>
            <Statistic label='Positive' number={setPositivePercent({good, total})}/>
          
        </div>

    )}

const App = (props) => {
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



    return (
        <div>
            <Header heading="give feedback"/>
            <Button onClick={handleGoodClick} text='good'/>
            <Button onClick={handleNeutralClick} text='neutral'/>
            <Button onClick={handleBadClick} text='bad'/>
            <Header heading="statistics"/>
            <Statistics good={good} bad={bad} neutral={neutral} total={total}/>
  
        </div>
    )

}

ReactDom.render(<App />, 
    document.getElementById('root')
)
