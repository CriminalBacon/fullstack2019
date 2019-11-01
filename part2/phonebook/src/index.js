import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [
    {
        id: 'Arto Hellas',
        name: 'Arto Hellas',
        number: '999999999'
    }
]


ReactDOM.render(
    <App persons={persons}/>, 
    document.getElementById('root')
)


