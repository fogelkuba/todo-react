import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';

import axios from 'axios';
// import uuid from 'uuid';

import './App.css';

// https://jsonplaceholder.typicode.com/todos
class App extends Component {
    state = {
        todos: []
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({
            todos: res.data
        }))
    }

    toggleCompleted = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            })
        })
    }

    remove = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => {
                return todo.id !== id
            })
        })
        
    }

    add = (title) => {
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid.v4(),
                    title: title,
                    completed: false
                }
            ]
        })
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route path="/" exact render={props => (
                        <React.Fragment>
                            <AddTodo add={this.add} />
                            <Todos
                                todos={this.state.todos}
                                remove={this.remove}
                                toggleCompleted={this.toggleCompleted}
                            />
                        </React.Fragment>
                    )}/> 
     
                    <Route path="/about" component={About}/>

                </div>
            </Router>  
  
        );
    }
}

export default App;
