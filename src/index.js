import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoApp from './TodoApp'


ReactDOM.render(<App name="Ratchapong" />, document.getElementById('root'));
ReactDOM.render(<TodoApp />, document.getElementById('todozone'));


