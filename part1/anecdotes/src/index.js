import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

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

const DisplayAnectdote = ({ toDisplay, count}) => (
    <p>
        {toDisplay}
        <br></br>
        has {count} votes
    </p>
)

const DisplayPopularAnectdote = ({ toDisplay, voteArray, count}) => {
    if ((Math.max(...voteArray)) === 0) {
        return( 
            <p>
                No votes have been cast.
            </p>
        )
    }
    return (
        <p>
            {toDisplay}
            <br></br>
            has {count} votes
        </p>
)}


const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))
    const [popularVoteIndex, setPopularVoteIndex] = useState(0)

    console.log(votes, 'votes')
    console.log(popularVoteIndex, 'popularvoteindex')

    const nextAnectdote = () => {
        const min = 0
        const max = anecdotes.length
        const rand = min + Math.floor(Math.random() * (max - min) )
        setSelected(rand)

    }
    
    const handleVoteClick = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVote(copy)
        setPopularVoteIndex(copy.indexOf(Math.max(...copy)))
    }
 
    return (
        <div>
            <Header heading={'Anecdote of the day'}/>
            <DisplayAnectdote toDisplay={props.anecdotes[selected]} count= {votes[selected]}/>
            <p>
                <Button onClick={() => handleVoteClick()} text='vote'/>
                <Button onClick={() => nextAnectdote()} text='next anectode'/>
            </p>
            <Header heading={'Anecdote with most votes'}/>
            <DisplayPopularAnectdote toDisplay={anecdotes[popularVoteIndex]} voteArray={votes} count={votes[popularVoteIndex]}/>
        </div>
        )
    }

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)