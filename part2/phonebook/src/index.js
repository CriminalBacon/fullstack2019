import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [
    {
        id: 'Arto Hellas',
        name: 'Arto Hellas',
        number: '999999999'
    },
    { 
        id: 'Ada Lovelace',
        name: 'Ada Lovelace', 
        number: '39-44-5323523' 
    },
    { 
        id: 'Dan Abramov', 
        name: 'Dan Abramov', 
        number: '12-43-234345' 
    },
    { 
        id: 'Mary Poppendieck',
        name: 'Mary Poppendieck', 
        number: '39-23-6423122' 
    }

]


ReactDOM.render(
    <App persons={persons}/>, 
    document.getElementById('root')
)


